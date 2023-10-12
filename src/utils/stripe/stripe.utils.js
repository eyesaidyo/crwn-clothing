import { loadStripe } from '@stripe/stripe-js'
export const stripePromise = loadStripe(
  'pk_test_51O06KbHZVwWHEHszvDAyWRFyDo8UJTFVTyj5wV3ukk7S7XgB3oUgGpy9fIWe6EZv8kvtMf6mQmM9rvIVgrk2QXvF00ghQdSVhA'
)