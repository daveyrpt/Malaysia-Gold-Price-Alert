import { Link } from "@inertiajs/react";
import Image from '../Components/Image'
import { ChevronRight, ArrowRight, BarChart3, Shield, TrendingUp, DollarSign, Award, Users } from "lucide-react"

import { Button } from "../Components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/ui/tab"

import { Gold, Face1, Face2, Face3 } from "@/assets/images/LandingPage";

export default function LandingPage({ auth, laravelVersion, phpVersion }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold">MYGold</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="font-medium transition-colors hover:text-amber-500">
              Features
            </Link>
            <Link href="#how-it-works" className="font-medium transition-colors hover:text-amber-500">
              How It Works
            </Link>
            <Link href="#pricing" className="font-medium transition-colors hover:text-amber-500">
              Pricing
            </Link>
            <Link href="#testimonials" className="font-medium transition-colors hover:text-amber-500">
              Testimonials
            </Link>
            <Link href="#faq" className="font-medium transition-colors hover:text-amber-500">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {auth.user ? (
              <Link href={route('dashboard')} className="font-medium hover:underline underline-offset-4">
                Dashboard
              </Link>
            ) : (
              <>
                <Link href={route('login')} className="font-medium hover:underline underline-offset-4">
                  Sign In
                </Link>
                <Link href={route('register')} className="bg-amber-500 hover:bg-amber-600 h-10 px-4 py-2 rounded-md text-white">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Invest in Gold with Confidence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Secure your financial future with our trusted gold trading platform. Start investing in minutes with
                    our easy-to-use tools.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                    Start Trading Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Shield className="mr-1 h-4 w-4 text-amber-500" />
                    <span>Secure Trading</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4 text-amber-500" />
                    <span>10K+ Traders</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="mr-1 h-4 w-4 text-amber-500" />
                    <span>Award Winning</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <Image
                    src={Gold}
                    alt="Gold Trading"
                    fill
                    className="object-cover rounded-lg morph-animation"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose MYGold</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers everything you need to trade gold with confidence and ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-amber-200">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-amber-500" />
                  <CardTitle className="mt-4">Real-Time Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access real-time gold price charts and market analysis to make informed trading decisions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader>
                  <Shield className="h-10 w-10 text-amber-500" />
                  <CardTitle className="mt-4">Secure Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your investments are protected with bank-level security and encryption technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-amber-500" />
                  <CardTitle className="mt-4">Expert Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get trading recommendations and market insights from gold industry experts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Process</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start trading gold in three simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <span className="text-2xl font-bold text-amber-800">1</span>
                </div>
                <h3 className="text-xl font-bold">Create an Account</h3>
                <p className="text-muted-foreground">
                  Sign up in minutes with our simple registration process. Verify your identity and you're ready to go.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <span className="text-2xl font-bold text-amber-800">2</span>
                </div>
                <h3 className="text-xl font-bold">Fund Your Account</h3>
                <p className="text-muted-foreground">
                  Deposit funds using your preferred payment method. We support bank transfers, credit cards, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                  <span className="text-2xl font-bold text-amber-800">3</span>
                </div>
                <h3 className="text-xl font-bold">Start Trading</h3>
                <p className="text-muted-foreground">
                  Buy and sell gold with our intuitive trading platform. Monitor your investments and watch your
                  portfolio grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your Plan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Select the trading plan that best fits your investment goals.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="monthly" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annually">Annually (Save 20%)</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly" className="grid gap-6 md:grid-cols-3">
                  <Card className="border-amber-200">
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>Perfect for beginners</CardDescription>
                      <div className="mt-4 flex items-baseline text-amber-800">
                        <span className="text-4xl font-extrabold tracking-tight">$9</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Basic market analysis</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Up to 5 trades per month</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Email support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-amber-500 shadow-lg">
                    <CardHeader className="bg-amber-500 text-white rounded-t-lg">
                      <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                        Most Popular
                      </div>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription className="text-amber-100">For serious traders</CardDescription>
                      <div className="mt-4 flex items-baseline text-white">
                        <span className="text-4xl font-extrabold tracking-tight">$29</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Advanced market analysis</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Unlimited trades</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Priority email support</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Expert trading signals</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-amber-200">
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For institutional investors</CardDescription>
                      <div className="mt-4 flex items-baseline text-amber-800">
                        <span className="text-4xl font-extrabold tracking-tight">$99</span>
                        <span className="ml-1 text-xl font-semibold">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Premium market analysis</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Unlimited trades</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>24/7 dedicated support</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Custom trading strategies</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>API access</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="annually" className="grid gap-6 md:grid-cols-3">
                  <Card className="border-amber-200">
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>Perfect for beginners</CardDescription>
                      <div className="mt-4 flex items-baseline text-amber-800">
                        <span className="text-4xl font-extrabold tracking-tight">$86</span>
                        <span className="ml-1 text-xl font-semibold">/year</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Basic market analysis</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Up to 5 trades per month</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Email support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-amber-500 hover:bg-amber-600">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-amber-500 shadow-lg">
                    <CardHeader className="bg-amber-500 text-white rounded-t-lg">
                      <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                        Most Popular
                      </div>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription className="text-amber-100">For serious traders</CardDescription>
                      <div className="mt-4 flex items-baseline text-white">
                        <span className="text-4xl font-extrabold tracking-tight">$278</span>
                        <span className="ml-1 text-xl font-semibold">/year</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Advanced market analysis</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Unlimited trades</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Priority email support</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Expert trading signals</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-amber-500 hover:bg-amber-600">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-amber-200">
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For institutional investors</CardDescription>
                      <div className="mt-4 flex items-baseline text-amber-800">
                        <span className="text-4xl font-extrabold tracking-tight">$950</span>
                        <span className="ml-1 text-xl font-semibold">/year</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Premium market analysis</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Unlimited trades</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>24/7 dedicated support</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>Custom trading strategies</span>
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-amber-500" />
                          <span>API access</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-amber-500 hover:bg-amber-600">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Traders Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers who have achieved their investment goals with MYGold.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="border-amber-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src={Face1}
                      alt="Avatar"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                      <CardDescription>Retail Investor</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "MYGold has completely transformed my investment strategy. The platform is intuitive and the
                    market insights have helped me make informed decisions."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src={Face2}
                      alt="Avatar"
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">Michael Chen</CardTitle>
                      <CardDescription>Professional Trader</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "As a professional trader, I need reliable tools and real-time data. MYGold delivers on all
                    fronts with their advanced analytics and secure platform."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src={Face3}
                      alt="Avatar"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">Emily Rodriguez</CardTitle>
                      <CardDescription>Financial Advisor</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "I recommend MYGold to all my clients looking to diversify with precious metals. Their customer
                    service is exceptional and the platform is easy to use."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about gold trading and our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle>How do I start trading gold?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Getting started is easy. Simply create an account, complete the verification process, fund your
                    account, and you can begin trading gold immediately.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle>What are the minimum investment requirements?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our platform allows you to start with as little as $100. This low entry point makes gold trading
                    accessible to everyone.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle>Is my investment secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we implement bank-level security measures to protect your investments. All transactions are
                    encrypted and we use multi-factor authentication to secure your account.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle>Can I withdraw my funds at any time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. You have full control over your funds and can withdraw them at any time. Withdrawal
                    processing typically takes 1-3 business days.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardHeader>
                  <CardTitle>Do you offer customer support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, our customer support team is available 24/7 to assist you with any questions or concerns. You
                    can reach us via email, live chat, or phone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Gold Trading Journey?
                </h2>
                <p className="text-amber-100 md:text-xl">
                  Join thousands of successful investors who have secured their financial future with MYGold.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-100">
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-700">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-amber-500" />
                <span className="text-xl font-bold">MYGold</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The trusted platform for gold trading and investment. Secure your financial future with us.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  About Us
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Careers
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Press
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  News
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Resources</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Blog
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Newsletter
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Events
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Help Center
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Tutorials
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Terms
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Privacy
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Cookies
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Licenses
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-amber-500">
                  Settings
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} MYGold. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

