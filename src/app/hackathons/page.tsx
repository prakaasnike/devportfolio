import { HACKATHONS } from "@/data/hackathons";
import BlurFade from "@/components/magicui/blur-fade";
import { HackathonCard } from "@/components/hackathon-card";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export default function HackathonsPage() {
  const blurFadeDelay = BLUR_FADE_DELAY || 0.1;
  return (
    <section id="hackathons" className="container mx-auto px-4 py-12">
      <div className="space-y-12 w-full">
        <BlurFade delay={blurFadeDelay * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Hackathons
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                I like building things
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                People from around the country would come together and build incredible things in 2-3
                days. It was eye-opening to see the endless possibilities
                brought to life by a group of motivated and passionate
                individuals.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={blurFadeDelay * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {HACKATHONS.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={blurFadeDelay * 15 + id * 0.05}
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}