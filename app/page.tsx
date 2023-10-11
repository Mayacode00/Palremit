import { Globals } from "@/components";
import {
  Cards,
  Freedom,
  Hero,
  Purpose,
  Media,
  Testimonials,
  Register,
} from "@/containers";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="bg-black">
        <Purpose />
        <Freedom />
        <Cards />
      </div>
      <div className="bg-white">
        <Media />
        <Testimonials />
        <Globals />
      </div>
      <Register />
    </main>
  );
}
