# Clever's Frontend Coding Interview

👋 Hello!, Hola!, Witam!

Thank you for taking the time to interview with Clever. This coding challenge is meant to be a _short_ exercise to see how you code on the frontend. Please don't spend more than a couple hours, and certainly don't stress. Treat it like you would any other coding task. Throw on some tunes 🎶, sit back, relax 😌, and code!

### Requirements

- Create a small web app using React and Typescript.
- Up to you how you scaffold it (eg. Next, Vite, even CRA).
- However, please use either `npm` or `yarn`.
- It will utilize the Pexels API to pull in some photos. Details below.
- We'd like you to create two (mobile responsive) pages:
  1. Sign in
  2. All photos
- You can fork this repo and commit your code there. Once done, please add the following users as members so we can review:
  - James Crain (@imjamescrain)
  - Jimmy Lien (@jlien)
  - Nick Clucas (@nickcluc)
  - Ryan McCue (@rymccue)
- We'll circle back with you and review 1:1.

### Details

- Mocks for these pages are provided in Figma. You should have been sent an invite to access them, if not let us know.
  - [Figma Mocks](https://www.figma.com/file/wr1seCuhlRtoFGuz1iWgyF/Frontend-Coding-Mocks?type=design&node-id=0%3A1&mode=design&t=Uw1av3TypDUDcLAd-1)
  - We are looking for **attention to detail** when implementing these.
- There is also a logo and an icon provided (SVGs) included in this repo.
- Pexels API Info
  - Api Key: `Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0`
  - Include an `Authorization` header with this value.
  - Endpoint: https://api.pexels.com/v1/search?query=nature&per_page=10
  - Documenation: https://www.pexels.com/api/documentation/#photos-search
- Make the "Sign in" page functional. However, you can spoof authentication any way you'd like (eg. save a value to local storage, etc).
- Make "All photos" require authentication to access.
- Only need to show 10 photos on the "All photos" page. Paging is not required.
- Photos should be like/unlikeable.

### Final Thoughts

Remember, please don't spend too much time on this. In fact, save a little time and **add a section to the README** outlining what else you'd do differently to make this a production ready app. We really just want to make sure you understand core React concepts (ie. context providers, memoization, callbacks, etc).

**Any questions**, just let us know. Send emails to <a href="mailto:james.crain@movewithclever.com">james.crain@movewithclever.com</a>. Good luck!

### What would i do to make this a production ready app?

- API & Data Handling:

  1. API key security: Store the key in environment variables (.env) and use a proxy backend to avoid exposing it to the client.

  2. Pagination: Load more results using next_page, with infinite scroll or a “Load more” button.

  3. Error handling: Show a user-friendly message if the API fails or returns no results.

- State & Performance Optimization:

 1. useCallback for memoizing handlers

 2. useMemo for memoizing photo cards and props passed to them, especially after implementing pagination so i could deal with many items.

 3. useReducer for more scalabe state updates like toggles or bulk state changes.

- Context Provider for Global State:

  - Use React Context for:
    1. Liked photos, so the state is accessible globally and potentially persistable.

    2. Theme thoggles, auth or any other preference.

- Testing:

  1. Unit tests with Jest for components.

  2. Integration tests with React Testing Library.

- Component Structure:

  1. Refactor a bit and break a few code blocks into reusable components such as:
    - PhotoCard.tsx
    - Input.tsx
    - Button.tsx
