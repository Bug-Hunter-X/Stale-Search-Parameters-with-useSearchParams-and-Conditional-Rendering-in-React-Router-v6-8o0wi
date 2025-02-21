To solve this, explicitly reset the search parameters when the component unmounts. You can achieve this using the `useEffect` hook with a cleanup function:

```javascript
function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoggedIn = useAuthStatus();

  useEffect(() => {
    console.log('SearchParams:', searchParams);
    return () => {
      // Cleanup function: reset searchParams on unmount
      setSearchParams({});
    };
  }, [searchParams, setSearchParams]);

  if (isLoggedIn) {
    return (
      <div>
        {/* Content visible when logged in */}
      </div>
    );
  } else {
    return <Navigate to='/login' replace/>;
  }
}
```

By adding a cleanup function to the `useEffect` hook that calls `setSearchParams({})`, we ensure the search parameters are cleared when the component unmounts. This prevents stale values from affecting subsequent renders.