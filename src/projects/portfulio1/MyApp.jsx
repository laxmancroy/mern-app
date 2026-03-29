import { Header } from './layout/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './layout/Skills';
import './index.css';


const MyApp = () => {
    return (
        <>
        <Header />
        <Hero />
        <About />
        <Skills />
        </>
    )
}

export default MyApp;