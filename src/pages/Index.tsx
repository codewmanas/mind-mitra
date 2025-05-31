import React from 'react'
import { ArrowRight, ChevronRight, Menu, X, Heart, MessageCircle, BookOpen, Brain, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        
        {/* Hero Section */}
        <section>
          <div className="relative pt-24 md:pt-36">
            <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 mx-auto flex w-fit items-center gap-2 rounded-full border p-1 pl-4 shadow-md">
                    <Brain className="w-4 h-4" />
                    <span className="text-sm">Now Live • GPT-4o Powered Companion</span>
                    <div className="bg-background size-6 overflow-hidden rounded-full">
                      <ArrowRight className="m-auto size-3" />
                    </div>
                  </Badge>
        
                  <h1 className="mt-8 max-w-4xl mx-auto text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-bold">
                    Your AI Companion for
                    <span className="block bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                      Emotional Wellness
                    </span>
                  </h1>
                  
                  <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                    MindMitra helps students reflect, recharge, and realign—anytime, anywhere.
                    Not a therapist, but a friendly companion for your emotional journey.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                  <div className="bg-foreground/10 rounded-[14px] border p-0.5">
                    <Button size="lg" className="rounded-xl px-8 text-base bg-primary hover:bg-primary/90">
                      <span className="text-nowrap">Try MindMitra Now</span>
                    </Button>
                  </div>
                  <Button size="lg" variant="ghost" className="h-10.5 rounded-xl px-8">
                    <span className="text-nowrap">Watch Demo</span>
                    <ChevronRight className="ml-2 size-4" />
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            {/* App Preview */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}>
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="bg-gradient-to-br from-primary/20 to-purple-200/30 rounded-2xl p-8 md:p-16 min-h-[400px] flex items-center justify-center mx-auto max-w-6xl border shadow-lg">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mx-auto shadow-lg border">
                      <Brain className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Interactive Demo Coming Soon</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Experience the full MindMitra interface with real-time mood tracking, AI conversations, and journaling features.
                    </p>
                    <Button className="mt-6">
                      Get Early Access
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-20 px-6 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything you need for emotional wellness
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple tools designed to help you understand and improve your emotional well-being
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Emoji Mood Logging</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    Track your emotions with simple emoji-based mood logging. Quick, intuitive, and helps you identify patterns in your emotional journey.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Personalized Pep Talks</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    Receive encouraging messages tailored to your current mood and situation. MindMitra learns your preferences to provide better support.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Reflective Journaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    Guided journal prompts help you reflect on your experiences and emotions, promoting self-awareness and personal growth.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How MindMitra Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Four simple steps to better emotional wellness
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Chat or Talk", description: "Start a conversation with MindMitra through text or voice" },
                { step: "02", title: "Log Your Mood", description: "Share how you're feeling with simple emoji-based mood tracking" },
                { step: "03", title: "Get Personalized Nudges", description: "Receive encouraging messages tailored to your current state" },
                { step: "04", title: "Reflect & Journal", description: "Engage with thoughtful prompts to deepen your self-awareness" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about MindMitra
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Is MindMitra a therapist or medical professional?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  No, MindMitra is not a therapist or a replacement for professional mental health care. It's a friendly AI companion designed to provide emotional support, encouragement, and reflection tools. For serious mental health concerns, please consult with a qualified professional.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-card rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Is my data private and secure?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Yes, your privacy is our priority. All data is stored securely using Supabase with industry-standard encryption. We never share your personal information or conversations with third parties. You maintain full control over your data.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-card rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  Do I need to sign up to try MindMitra?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  No signup is required for the v1 demo! You can start chatting with MindMitra immediately. However, creating an account allows you to save your mood history and personalize your experience further.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-card rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  What makes MindMitra different from other wellness apps?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  MindMitra combines voice and chat interactions with GPT-4o's conversational AI, creating a more natural and personalized experience. It's specifically designed for students, understanding the unique challenges of academic life and personal growth.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted/50 py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <MindMitraLogo />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Your AI companion for emotional wellness. Helping students reflect, recharge, and realign.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Mood Tracking</li>
                  <li>AI Conversations</li>
                  <li>Reflective Journaling</li>
                  <li>Personalized Support</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors cursor-pointer">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors cursor-pointer">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors cursor-pointer">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground mb-4 md:mb-0">
                © 2024 MindMitra. Built with ❤️ for the 100xEngineers Buildathon.
              </p>
              <div className="flex space-x-6 text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">Support</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

const menuItems = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'FAQ', href: '#faq' },
  { name: 'About', href: '#about' },
]

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 group">
        <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <a href="/" aria-label="home" className="flex items-center space-x-2">
                <MindMitraLogo />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground block duration-150">
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground block duration-150">
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <ThemeToggle />
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}>
                  <a href="#">
                    <span>Login</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}>
                  <a href="#">
                    <span>Sign Up</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                  <a href="#">
                    <span>Get Started</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const MindMitraLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Brain className="w-8 h-8 text-primary" />
      <span className="text-2xl font-bold">MindMitra</span>
    </div>
  )
}

export default Index;
