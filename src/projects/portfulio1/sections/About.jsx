import { Expert } from './Expert';
import { WhyMe } from './WhyMe';

export const About = () => {
    return (
        <>
        <div>
            <h1 className="text-3xl text-center mt-15 mb-5">About Me - Your Full Stack Developer</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Rem, quibusdam. Quis, modi? Perferendis quos quidem minus, ipsum tenetur, <br />cumque, vitae reiciendis corporis dolorum perspiciatis <br />aperiam. Consectetur hic laborum tempore accusantium eos quo saepebr <br /> sit eaque quasi doloribus aperiam inventore ab id autem temporibus veniam, necessitatibus <br />illum eius distinctio? Ipsum, vitae?</p>
        </div>
        <Expert />
        <WhyMe />
        </>     
    )
}