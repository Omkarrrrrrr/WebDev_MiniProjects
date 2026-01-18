🔐 Password Generator using JavaScript

A modern, secure, and interactive Password Generator built using HTML, CSS, and Vanilla JavaScript.
This application allows users to generate strong random passwords with real-time strength analysis and a smooth, animated user interface.

🚀 Features
✅ Password Generation

Generates random and secure passwords

Ensures character variety:

Uppercase letters

Lowercase letters

Numbers

Special symbols

Uses shuffle logic to prevent predictable character patterns

🎚 Password Length Control

Adjustable password length using a range slider

Supports lengths from 6 to 20 characters

Selected length is displayed dynamically in real time

📊 Password Strength Indicator

Real-time password strength evaluation based on:

Password length

Character variety

Strength levels:

🔴 Weak

🟡 Medium

🟢 Strong

Includes an animated strength bar with:

Smooth transitions

Gradient colors

Glow effects for strong passwords

📋 Copy to Clipboard

One-click copy password functionality

Uses the modern Clipboard API

Includes fallback support for older browsers

Displays user feedback after copying

🎨 Modern UI & UX

Clean and responsive layout

Smooth CSS transitions and animations

Gradient backgrounds and hover effects

Subtle micro-interactions for an enhanced user experience

🛡 Security Considerations

Password characters are randomized and shuffled

Prevents predictable character positions

Strength logic aligned with actual entropy scoring

No password data is stored or transmitted
(fully client-side and privacy-friendly)

🧠 Strength Logic (How It Works)

The password strength score is calculated based on the following criteria:

Password length ≥ 8

Password length ≥ 12

Contains uppercase letters

Contains lowercase letters

Contains numbers

Contains special symbols

🔍 Strength Mapping
Score Range	Strength
0 – 2	Weak
3 – 4	Medium
5 – 6	Strong
🧰 Tech Stack

HTML5 – Structure

CSS3 – Styling, animations, transitions

JavaScript (ES6+) – Logic & DOM manipulation

Clipboard API – Copy-to-clipboard functionality
