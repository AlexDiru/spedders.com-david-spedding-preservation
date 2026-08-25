# spedders.com — Preserved from 2003

A rebuilt and preserved version of **David Spedding's** journalism portfolio website, originally at `www.spedders.com`.

David was a freelance journalist who wrote for publications including Arena, Heat, Attitude, Radio Times, Red, the Sunday Times, Daily Mirror, and others. His work included Q&A interviews and features covering shows such as Six Feet Under, The Sopranos, The West Wing, Bob & Rose, Will & Grace, Sex and the City, Smallville, Charmed, and ER, as well as interviews with figures like Stephen Fry, James Gandolfini, Jennifer Aniston, and Russell T Davies.

The original site was built in PHP by Stuart Ford (Rhydio Ltd) in December 2001, with updates through April 2003. This rebuild faithfully preserves all 49 articles, images, and the original visual design using a modern TypeScript stack.

Rest in peace, our son, brother, uncle, friend and colleague.

## Tech stack

- **Next.js 16** with TypeScript
- **Tailwind CSS**
- All article content extracted from the original PHP source and stored as static JSON
- Statically generated at build time (SSG)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Original source

The `www.spedders.com` directory in the parent folder contains the original archived PHP site from circa 2001–2003.
