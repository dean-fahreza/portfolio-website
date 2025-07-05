import { cn } from '@/lib/utils';
import { useState } from 'react';

const skills = [
    // frontend
    {name: 'React JS', level: 65, category:'frontend'},

    // backend
    {name: 'Python', level: 78, category: 'backend'},

    // tools
    {name: 'VS Codium', level: 85, category: 'tools'},
    {name: 'Git', level: 80, category: 'tools'},

    //  OS
    {name: 'Windows', level: 90, category: 'OS'},
    {name: 'WSL2-Ubuntu', level: 76, category: 'OS'},
];

const categories = ['all', 'frontend', 'backend', 'tools', 'OS'];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState('all');
    const filteredSkills = skills.filter((skill) => activeCategory === 'all' 
    || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category, key) => (
                        <button key={key} className={cn('px-5 py-2 rounded-full transition-colors duration-300',
                            'capitalize', activeCategory === category 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-secondary/70 text-foreground hover:bg-secondary')} 
                            onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))};
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div className="bg-card p-6 rounded-lg shadow-xs card-hover" key={key}>
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className={cn('bg-primary h-2 rounded-full origin-left',
                                    'animate-[grow_1.5s_ease-out]')} style={{
                                        width: skill.level + '%'
                                    }} />
                            </div>
                            <div className='text-right mt-1'>
                                <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
