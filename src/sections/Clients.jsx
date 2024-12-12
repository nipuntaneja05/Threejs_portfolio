import { clientReviews } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from My Clients</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div
            key={`review-${item.id}`}
            className="client-review group"
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              transformStyle: 'preserve-3d',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotateY(15deg) rotateX(5deg) scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 15px 30px rgba(0, 0, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.3)';
            }}
          >
            <div
              className="inner-container"
              style={{ transform: 'translateZ(60px)', transition: 'transform 0.4s ease' }}
            >
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content" style={{ marginTop: '1rem' }}>
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt="reviewer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;