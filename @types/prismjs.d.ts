declare module 'prismjs' {
    const Prism: {
        highlightAll: () => void;
        highlight: (code: string, language: string) => string;
    };
    export default Prism;
};