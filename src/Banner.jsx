
import { useGlobalContext } from './context';

const Banner = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='p-10' onMouseOver={closeSubmenu}>
      <div>
        <article>
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn'>Start now</button>
        </article>
      </div>
    </section>
  );
};

export default Banner;
