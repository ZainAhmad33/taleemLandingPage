export function scrollToSection(scrollTo: string) {
    const target = document.getElementById(scrollTo);
    const offset = 270; // Height of the fixed header
    const targetPosition = target?.getBoundingClientRect() ? target?.getBoundingClientRect().top + window.pageYOffset - offset : 0;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}