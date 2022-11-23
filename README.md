### Redux Toolkit and Thunk Middleware

## `Installation`

```
npm install veya yarn
```

## `Used Library`

- `@reduxjs/toolkit`
- `react-redux`
- `Thunk middleware`
- `axios`
- `react-router-dom`
- `@mui/material-ui`
- `@emotion/react`
- `@emotion/styled`

## `Used API`:

- https://newsapi.org/
  (Click Get button to get ApiKey)

- URL:
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;

## `Used Tools`

- `Redux Dev Tools` : Chrome uzerinde calisan ve global state uzerinde yapilan tum degisikliklerin takip edilmesini saglayan tarayici uzantisidir. Indirmek icin [tiklayiniz.](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon)`

## `Thunk Middleware`

- `Async işlemleri yönetmek için Redux'ta middleware e ihtiyaç duyarız. Bunun için Redux Toolkit ile default gelen middleware Thunk kullanılacak.`
