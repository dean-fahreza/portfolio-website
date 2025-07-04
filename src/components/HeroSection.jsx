import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    {/*  */}
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                             Hi, i'm&nbsp;
                        </span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-1">
                            Muhammad&nbsp;
                        </span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">
                            Dean&nbsp;
                        </span>
                        <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-3">
                            Fahreza&nbsp;
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0
                                  animate-fade-in-delay-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus quibusdam
                        impedit aut cupiditate eaque voluptatibus, doloribus officiis sit quam repellat laborum 
                        voluptates blanditiis! Tempora!
                    </p>
                    <div className="opacity-0 animate-button-for-cv pt-4">
                        <a href="#projects" className="cosmic-button">
                            View what i learn and made!
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center
                            animate-bounce">
                {/*  */}
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}

