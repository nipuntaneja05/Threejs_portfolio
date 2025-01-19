import { useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import Contact from './Contact.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const contactRef = useRef(null); // Ref for the Contact section

  const handleCopy = () => {
    navigator.clipboard.writeText('nipuntaneja05@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleContactRedirect = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the Contact section
  };

  return (
    <>
      <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
          {/* Card 1 */}
          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out">
              <img
                src="assets/grid1.png"
                alt="grid-1"
                className="w-full sm:h-[276px] h-fit object-contain"
              />
              <div>
                <p className="grid-headtext">Hi, I’m Nipun Taneja</p>
                <p className="grid-subtext">
                  With passion for innovation, I specialize in building scalable web and mobile applications with a keen interest in AI/ML.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out">
              <img
                src="assets/grid2.png"
                alt="grid-2"
                className="w-full sm:h-[276px] h-fit object-contain"
              />
              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications such as MERN stack and REACT NATIVE.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-span-1 xl:row-span-4">
            <div className="grid-container hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                />
              </div>
              <div>
                <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                <p className="grid-subtext">I'm based in Delhi, India, and open to remote work worldwide.</p>
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                  onClick={handleContactRedirect} // Call the scroll function here
                />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="xl:col-span-2 xl:row-span-3">
            <div className="grid-container hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out">
              <img
                src="assets/grid3.png"
                alt="grid-3"
                className="w-full sm:h-[266px] h-fit object-contain"
              />
              <div>
                <p className="grid-headtext">My Passion for Technology</p>
                <p className="grid-subtext">
                  I love solving problems and building things. I find Programming one of the best ways to express this. I enjoy exploring new technologies and enhancing my skills.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out">
              <img
                src="assets/grid4.png"
                alt="grid-4"
                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />
              <div className="space-y-2">
                <p className="grid-subtext text-center">Contact me</p>
                <div className="copy-container" onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">nipuntaneja05@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="c-space my-20">
        <h2>Contact</h2>
        <p>Feel free to get in touch with me!</p>
        {Contact}
      </section>
    </>
  );
};

export default About;
