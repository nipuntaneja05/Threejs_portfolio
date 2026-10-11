import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import useInView from '../hooks/useInView.js';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();
  const [globeContainerRef, isGlobeInView] = useInView({ threshold: 0.05, rootMargin: '150px' });

  useEffect(() => {
    if (globeRef.current) {
      if (isGlobeInView) {
        globeRef.current.resumeAnimation?.();
      } else {
        globeRef.current.pauseAnimation?.();
      }
    }
  }, [isGlobeInView]);

  const handleCopy = () => {
    navigator.clipboard.writeText('nipuntaneja05@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleContactRedirect = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Card 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I’m Nipun Taneja</p>
              <p className="grid-subtext">
                Applied Scientist Intern at Amazon and B.Tech in Electronics & Communication Engineering at Delhi Technological University (DTU). I specialize in LLM Multi-Agent systems, RAG, long-term memory architectures, and scalable AI platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out justify-between">
            <div>
              <p className="grid-headtext">Tech Stack & Expertise</p>
              <p className="grid-subtext mb-4">
                Specialized in production-grade LLM architectures, intelligent agentic workflows, and scalable systems.
              </p>

              <div className="flex flex-col gap-4 mt-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white-500 font-semibold mb-2">
                    AI & Machine Learning
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Machine Learning',
                      'Deep Learning',
                      'LLMs',
                      'Multi-Agent Systems',
                      'RAG',
                      'LoRA Fine-Tuning',
                      'NLP',
                      'PyTorch',
                      'Hugging Face',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-md bg-black-300 text-white-700 border border-black-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white-500 font-semibold mb-2">
                    Languages & Core CS
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Python',
                      'C++',
                      'JavaScript',
                      'SQL',
                      'Data Structures & Algorithms',
                      'OOP',
                      'DBMS',
                      'Operating Systems',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-md bg-black-300 text-white-700 border border-black-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white-500 font-semibold mb-2">
                    Frameworks, Cloud & Tools
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'FastAPI',
                      'Flask',
                      'React.js',
                      'Pandas',
                      'AWS (Bedrock, DynamoDB)',
                      'Vector DBs (Qdrant, Pinecone)',
                      'Git',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs rounded-md bg-black-300 text-white-700 border border-black-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <div ref={globeContainerRef} className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center overflow-hidden max-w-full">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 28.6139, lng: 77.2090, text: 'New Delhi, India', color: 'white', size: 18 }]}
                onGlobeReady={() => {
                  if (globeRef.current) {
                    const renderer = globeRef.current.renderer?.();
                    if (renderer) {
                      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
                    }
                    if (!isGlobeInView) {
                      globeRef.current.pauseAnimation?.();
                    }
                  }
                }}
              />
            </div>
            <div>
              <p className="grid-headtext">Flexible with time zones & locations</p>
              <p className="grid-subtext">Based in Delhi, India, open to high-impact research, engineering roles, and collaborations worldwide.</p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
                onClick={handleContactRedirect}
              />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for AI & Scalable Systems</p>
              <p className="grid-subtext">
                I am passionate about solving real-world challenges through rigorous machine learning and modern system engineering. From multi-agent debate architectures and deterministic policy loops at Amazon to episodic conversational memory systems (Evermemos), I build intelligent, autonomous, and cost-bounded solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Get in touch directly</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-gray_gradient text-white break-all sm:break-normal">nipuntaneja05@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
