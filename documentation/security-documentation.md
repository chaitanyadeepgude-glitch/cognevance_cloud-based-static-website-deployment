# Cognevance Technologies – Security & Monitoring Documentation

**Organization:** Cognevance Technologies  
**Project:** Cloud-Based Static Website Deployment (Level 1)  
**Security Model:** Defense-in-Depth for Serverless Static Architecture  
**Monitoring Solution:** UptimeRobot HTTP(S) Synthetic Probing

---

## 1. Security Architecture & Threat Model

Static websites have a significantly reduced attack surface compared to dynamic web applications because there is no underlying database, application server, or server-side scripting environment (e.g., PHP, Python, Node.js). However, static websites still face browser-level security threats, client-side injection risks, transport vulnerabilities, and supply-chain attacks.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        THREAT VECTOR ANALYSIS                          │
├────────────────────────────────┬───────────────────────────────────────┤
│ Threat Vector                  │ Static Site Mitigation                │
├────────────────────────────────┼───────────────────────────────────────┤
│ SQL Injection (SQLi)           │ N/A (Zero database connection)        │
│ Remote Code Execution (RCE)    │ N/A (No server-side runtime)          │
│ Cross-Site Scripting (XSS)     │ Safe DOM textContent, no innerHTML    │
│ Man-in-the-Middle (MITM)       │ Enforced HTTPS via Let's Encrypt TLS  │
│ Tab-napping / Opener Leak      │ rel="noopener noreferrer" on <a> tags │
│ Supply Chain / Malicious CDN   │ Zero third-party runtime JS libraries │
│ Credential Leakage             │ Zero hardcoded tokens or API secrets  │
└────────────────────────────────┴───────────────────────────────────────┘
```

---

## 2. Implemented Security Controls

### 2.1 Transport Layer Security (TLS/HTTPS)
- All traffic between clients and GitHub Pages is secured over TLS 1.3/1.2 using 256-bit automated certificates issued by Let's Encrypt.
- Unencrypted HTTP requests are automatically upgraded and redirected (301 Moved Permanently) to secure `https://` URLs.

### 2.2 Safe DOM Manipulation & Zero Unsafe `innerHTML`
- User input handling in `js/script.js` uses strict `textContent` and `createElement` methods.
- Dynamic markup injection using `innerHTML` or `document.write` is strictly prohibited, preventing Reflected and DOM-based Cross-Site Scripting (DOM XSS).

### 2.3 Secure Hyperlinks & Reverse Tab-napping Protection
- All external links (e.g., GitHub, UptimeRobot, documentation) include:
  ```html
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">...</a>
  ```
- `noopener` ensures the newly opened tab cannot access the originating window via `window.opener`.
- `noreferrer` prevents leaking the HTTP `Referer` header containing internal URLs.

### 2.4 Credential Sanitation
- The static repository contains zero secrets, tokens, database passwords, or private API keys.
- Form submissions are explicitly handled client-side without fake backend relays.

---

## 3. Static Hosting Security Limitations & Nuances

### Important Notice on GitHub Pages Server Headers:
> **Notice**: GitHub Pages operates on a shared Fastly edge proxy cluster. GitHub Pages does **not** support arbitrary custom server response headers via `.htaccess`, `nginx.conf`, or `web.config` configuration files. 

To implement fine-grained custom HTTP response headers (such as `Strict-Transport-Security`, `Permissions-Policy`, and complex `Content-Security-Policy`), an organization must place a reverse proxy (such as Cloudflare or AWS CloudFront) in front of the GitHub Pages origin.

### Recommended Content Security Policy (Meta Tag Format):
For static hosting where server headers cannot be modified, security policies can be declared directly in the HTML `<head>`:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; script-src 'self';">
```

---

## 4. Website Monitoring with UptimeRobot

### 4.1 Overview
Uptime monitoring verifies that the published GitHub Pages site remains reachable from multiple global test locations. UptimeRobot executes automated synthetic HTTP/S requests at scheduled intervals and triggers instant alerts if the website returns non-200 status codes (e.g., 404, 500, 502) or fails DNS resolution.

### 4.2 Uptime Monitoring vs. Performance Monitoring

| Feature | Uptime Monitoring (UptimeRobot) | Deep Performance Monitoring (APM / Lighthouse) |
| :--- | :--- | :--- |
| **Primary Metric** | Availability (Up vs. Down status) | Core Web Vitals (LCP, FID, CLS, TTFB) |
| **Frequency** | Every 5 minutes (continuous 24/7) | Periodic or on-demand synthetic audits |
| **Alerting** | Instant SMS/Email/Webhook on downtime | Threshold alerts on latency degradation |
| **Resource Cost** | Minimal overhead (HTTP HEAD/GET request) | Full browser DOM execution & profiling |

### 4.3 Step-by-Step UptimeRobot Setup Instructions

1. **Create an Account**: Register at [https://uptimerobot.com/](https://uptimerobot.com/) (Free plan supports 50 monitors).
2. **Add New Monitor**:
   - Click the **+ Add New Monitor** button in the dashboard.
   - **Monitor Type**: Select **HTTP(s)**.
   - **Friendly Name**: `Cognevance Technologies - Production Site`.
   - **URL (or IP)**: Enter your published GitHub Pages URL (e.g., `https://<username>.github.io/cognevance_cloud_static_website/`).
   - **Monitoring Interval**: Select **5 minutes**.
   - **Monitor Timeout**: Set to **30 seconds**.
3. **Configure Alert Contacts**:
   - Check your verified email address under *Select "Alert Contacts To Notify"*.
   - Optionally add Slack or Discord webhook notifications.
4. **Save Monitor**: Click **Create Monitor**.

### 4.4 Interpreting Uptime Reports
- **Status (200 OK)**: Website is responding correctly with valid content.
- **Uptime Ratio (%)**: Expected target is $\ge 99.9\%$ monthly availability.
- **Response Time Graph**: Measures edge latency from global probe locations (target: $< 150\text{ms}$ on Fastly CDN).
- **Incident Logs**: Records exact timestamp, downtime duration, and HTTP status code if an outage occurs.
