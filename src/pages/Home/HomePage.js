import { Hero } from "./components/Hero";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { Faq } from "./components/Faq";
 import { Testimonials } from "./components/Testimonials";

export const HomePage = () => {
    return (
        <main>
            <Hero/>
            <FeaturedProduct/>
            <Testimonials/>
            <Faq/>
        </main>
      )
}
