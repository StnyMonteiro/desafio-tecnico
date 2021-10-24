const users = [
  {
    id: 0,
    name: "Aroldo Goulart",
    image: 'https://avatars.githubusercontent.com/u/38509926?v=4'
  },
  {
    id: 1,
    name: "Sthefany Monteiro",
    image: 'https://avatars.githubusercontent.com/u/93047575?v=4'
  },
]

type UserType = {
  id: number,
  name: string,
  image: string
}

export {
  users
}
export type { UserType }
