


const projects = [
    {
        id: 1,
        title: 'Thesis of models classification with CNN',
        description: 'An undergraduate thesis about classification models with CNN. How to find accuracy and loss models.',
        image: '/projects/Project1.png'
    },
    {
        id: 2,
        title: 'Bellshade Java Projects',
        description: 'A collection of Java projects from the Bellshade curriculum.',
        image: '/projects/Project2.png'
    }
];

export const ProjectsSection = () => {
  return (
      <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-4 md:text-4xl text-center">Featured <span className="text-primary">Projects</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore some of my featured projects.
        </p>
      </div>
      </section>
    );
};
