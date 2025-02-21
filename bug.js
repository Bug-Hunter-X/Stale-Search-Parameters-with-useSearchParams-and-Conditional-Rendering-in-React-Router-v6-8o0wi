In React Router Dom v6,  using the `useSearchParams` hook within a component that is conditionally rendered (e.g., based on authentication status) can lead to unexpected behavior if the component unmounts and remounts frequently.  This is because `useSearchParams` initializes and persists its state even if the component itself disappears from the DOM. When the component remounts, it might not reflect the actual URL parameters because the hook's internal state is not properly reset.

```javascript
function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoggedIn = useAuthStatus(); // Some authentication check

  useEffect(() => {
    console.log('SearchParams:', searchParams);
  }, [searchParams]);

  if (isLoggedIn) {
    return (
      <div>
        {/* Content visible when logged in */}
      </div>
    );
  } else {
    return <Redirect to='/login' />;
  }
}
```