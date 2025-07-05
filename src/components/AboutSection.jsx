import { cn } from '@/lib/utils';
import { Briefcase, Code, User } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="mx-auto max-w-5xl container">
                {/*  */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/*  */}
                    <div className="space-y-6">
                        {/* left section */}
                        <h3 className="text-2xl font-semibold">Long life learner</h3>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nam, 
                            mollitia ad molestiae adipisci earum voluptas molestias culpa dolorem beatae hic 
                            accusantium doloremque quod quisquam minima quae corrupti nihil iure.
                        </p>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium nam, 
                            mollitia ad molestiae adipisci earum voluptas molestias culpa dolorem beatae hic 
                            accusantium doloremque quod quisquam minima quae corrupti nihil iure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            {/* button */}
                            <a href="#contact" className="cosmic-button">
                                Get in touch
                            </a>
                            <a href="" className={cn('px-6 py-2 rounded-full border border-primary',
                                'hover:bg-primary/10 transition-colors duration-300'
                            )}>
                                Download CV
                            </a>
                        </div>
                    </div>
                    {/* right section */}
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    < Code className='w-6 h-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Lorem ipsum dolor sit amet.</h4>
                                    <p className='text-muted-foreground'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eum. 
                                        Molestiae repellat eos vel laborum corrupti fuga provident, nulla quo 
                                        cum facilis sed veniam atque!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    < User className='w-6 h-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Lorem ipsum dolor sit amet.</h4>
                                    <p className='text-muted-foreground'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eum. 
                                        Molestiae repellat eos vel laborum corrupti fuga provident, nulla quo 
                                        cum facilis sed veniam atque!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    < Briefcase className='w-6 h-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Lorem ipsum dolor sit amet.</h4>
                                    <p className='text-muted-foreground'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eum. 
                                        Molestiae repellat eos vel laborum corrupti fuga provident, nulla quo 
                                        cum facilis sed veniam atque!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
