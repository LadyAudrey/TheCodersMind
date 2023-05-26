import "./Body.css";

export default function Body() {
  return (
    <main className="main-body">
      <nav>
        <h3>TOOLS</h3>
        <h4>Debugging Guide</h4>
        <h4>Blog</h4>
      </nav>
      <div id="content">
        <p className="content-left">
          Hi! I'm Audrey, I'll be your guide on an incredible journey of
          developing your own learning style while learning the art of coding.
          Join me as we explore the intricacies of coding challenges, tackle new
          tools, conquer algorithmic patterns, and navigate the rewarding world
          of debugging.
        </p>
        <img
          src="src/assets/professional_selfie.jpg"
          className="content-right content-img"
        />
        <img
          src="src/assets/mountain.jpg"
          className="content-left content-img"
        />
        <p className="content-right">
          Through my guidance, we will unravel the secrets behind successful
          learning processes. I'm here to empower you to overcome obstacles,
          excel in front-end development, and hone your debugging skills, all
          while fostering a growth-oriented mindset.
        </p>

        <p className="content-left">
          Coding is an immersive experience that goes beyond lines of code; it's
          a gateway to personal growth and self-discovery. Along this path, you
          will not only acquire valuable technical skills but also develop the
          ability to embrace challenges and nurture a positive inner dialogue.
          Let's create an environment that fosters your self-compassion and
          encourages a love for continuous learning.
        </p>
        <img
          src="src/assets/lightbulb.jpg"
          className="content-right content-img"
        />
        <img
          src="src/assets/toolsAndBrushes.jpg"
          className="content-left content-img"
        />
        <p className="content-right">
          As we embark on this transformative journey, we will dive deep into
          the art of learning itself. You'll gain the tools and strategies to
          approach new coding projects with confidence, explore advanced
          algorithms using proven patterns, and cultivate effective debugging
          techniques. Together, we will unlock your true potential as a learner.
        </p>
        <p className="content-left">
          Are you ready to embark on a journey of self-discovery and unlock your
          coding potential? Embark on a exploration of this website as we delve
          into the art of mastering the learning process, all while honing your
          coding skills and preparing you for a rewarding career in the world of
          programming. Embrace challenges, embrace personal growth, and unlock a
          world of possibilities in your coding journey.
        </p>
      </div>
    </main>
  );
}
