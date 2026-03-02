    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--bg-primary);
        color: var(--fg-primary);
        overflow-x: hidden;
    }

    .font-display {
        font-family: 'Playfair Display', serif;
    }

    /* Batik Pattern Background */
    .batik-pattern {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.08;
        background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a227' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2zM0 40h2l-2 2v-2zm0 4l4-4h2l-6 6v-2zm0 4l8-8h2l-10 10v-2zm0 4l12-12h2L0 54v-2zm0 4l16-16h2L0 58v-2zm0 4l20-20h2L0 62v-2zm0 4l24-24h2L0 66v-2zm0 4l28-28h2L0 70v-2zm0 4l32-32h2L0 74v-2zm0 4l36-36h2L0 78v-2zm0 4l40-40v2L2 80H0zm4 0l36-36v2L6 80H4zm4 0l32-32v2L10 80H8zm4 0l28-28v2L14 80h-2zm4 0l24-24v2L18 80h-2zm4 0l20-20v2L22 80h-2zm4 0l16-16v2L26 80h-2zm4 0l12-12v2L30 80h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E");
    }

    /* Ornamental Border */
    .ornament-border {
        position: relative;
    }

    .ornament-border::before,
    .ornament-border::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 30px;
        background: linear-gradient(90deg, transparent, var(--accent), transparent);
        opacity: 0.6;
    }

    .ornament-border::before {
        top: 0;
        clip-path: polygon(0 100%, 20% 0, 80% 0, 100% 100%);
    }

    .ornament-border::after {
        bottom: 0;
        clip-path: polygon(0 0, 20% 100%, 80% 100%, 100% 0);
    }

    /* Decorative Elements */
    .decorative-line {
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--accent), transparent);
    }

    /* Card Styles */
    .recipe-card {
        background: linear-gradient(145deg, var(--bg-card), var(--bg-secondary));
        border: 1px solid var(--border);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }

    .recipe-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--maroon), var(--accent), var(--maroon));
        transform: scaleX(0);
        transition: transform 0.4s ease;
    }

    .recipe-card:hover::before {
        transform: scaleX(1);
    }

    .recipe-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(201, 162, 39, 0.1);
        border-color: var(--accent);
    }

    /* Search Input */
    .search-input {
        background: rgba(45, 24, 16, 0.8);
        border: 2px solid var(--border);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .search-input:focus {
        border-color: var(--accent);
        box-shadow: 0 0 20px rgba(201, 162, 39, 0.3);
        outline: none;
    }

    /* Category Pills */
    .category-pill {
        background: var(--bg-card);
        border: 1px solid var(--border);
        transition: all 0.3s ease;
    }

    .category-pill:hover,
    .category-pill.active {
        background: var(--maroon);
        border-color: var(--accent);
        transform: scale(1.05);
    }

    /* Modal */
    .modal-overlay {
        background: rgba(10, 5, 3, 0.95);
        backdrop-filter: blur(10px);
    }

    .modal-content {
        background: linear-gradient(180deg, var(--bg-secondary), var(--bg-primary));
        border: 2px solid var(--border);
        max-height: 90vh;
        overflow-y: auto;
    }

    .modal-content::-webkit-scrollbar {
        width: 8px;
    }

    .modal-content::-webkit-scrollbar-track {
        background: var(--bg-primary);
    }

    .modal-content::-webkit-scrollbar-thumb {
        background: var(--accent-dark);
        border-radius: 4px;
    }

    /* Animations */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.6s ease forwards;
        opacity: 0;
    }

    .animate-float {
        animation: float 4s ease-in-out infinite;
    }

    /* Stagger delays */
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    .delay-4 { animation-delay: 0.4s; }
    .delay-5 { animation-delay: 0.5s; }

    /* Difficulty Badge */
    .badge-easy { background: #2d5a3d; }
    .badge-medium { background: #5a4a2d; }
    .badge-hard { background: #5a2d3d; }

    /* Origin Badge */
    .origin-badge {
        background: linear-gradient(135deg, var(--maroon), var(--maroon-light));
    }

    /* Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }

    /* Focus States */
    button:focus-visible,
    a:focus-visible,
    input:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
    }

    /* Recipe Image Placeholder */
    .recipe-image {
        background: linear-gradient(135deg, var(--bg-secondary), var(--bg-card));
        position: relative;
        overflow: hidden;
    }

    .recipe-image::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, transparent 40%, rgba(201, 162, 39, 0.1) 50%, transparent 60%);
        background-size: 200% 200%;
        animation: shimmer 3s infinite;
    }

    /* Scroll indicator */
    .scroll-indicator {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--maroon), var(--accent));
        z-index: 100;
        transition: width 0.1s ease;
    }
</style>
