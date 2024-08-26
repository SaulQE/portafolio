import { TextGenerateEffect } from '../ui/text-generate-effect';

const words = `La tecnología y el software han demostrado ser una extensión de nuestra imaginación, transformando nuestras ideas más audaces en realidades tangibles. En cada línea de código y en cada diseño de interfaz, estamos no solo resolviendo problemas, sino también construyendo el futuro y redefiniendo lo que es posible.`;

export function TextGenerateEffectDemo() {
	return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
