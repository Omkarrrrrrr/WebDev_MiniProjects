🔐 Password Generator using JavaScript

A modern, secure, and interactive Password Generator built using HTML, CSS, and Vanilla JavaScript.
The application allows users to generate strong random passwords with real-time strength analysis and a smooth, animated UI.

🚀 Live Features
✅ Password Generation

Generates random, secure passwords

Ensures character variety:

Uppercase letters

Lowercase letters

Numbers

Special symbols

Uses shuffle logic to avoid predictable patterns

🎚 Password Length Control

Adjustable password length using a range slider

Length can be set between 6 to 20 characters

Selected length is displayed dynamically

📊 Password Strength Indicator

Real-time strength analysis based on:

Password length

Character variety

Strength levels:

🔴 Weak

🟡 Medium

🟢 Strong

Includes an animated strength bar with color gradients and glow effects

📋 Copy to Clipboard

One-click copy password functionality

Uses the modern Clipboard API

Includes fallback support for older browsers

Shows user feedback after copying

🎨 Modern UI & UX

Clean, responsive layout

Smooth CSS transitions and animations

Gradient backgrounds and hover effects

Subtle micro-interactions for better user experience

🛡 Security Considerations

Password characters are randomized and shuffled

Prevents predictable character positions

Strength logic aligned with actual entropy scoring

No password data is stored or sent anywhere (client-side only)

🧠 Strength Logic (How it Works)

The strength score is calculated using:

Password length ≥ 8

Password length ≥ 12

Contains uppercase letters

Contains lowercase letters

Contains numbers

Contains symbols

Strength Mapping:
Score Range	Strength
0 – 2	Weak
3 – 4	Medium
5 – 6	Strong
🧰 Tech Stack

HTML5 – Structure

CSS3 – Styling, animations, transitions

JavaScript (ES6+) – Logic & DOM manipulation

Clipboard API – Copy functionality
