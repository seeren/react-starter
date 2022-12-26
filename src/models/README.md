# Models

Models are interfaces representing server side data.

Models are used by [Hooks](./../hooks/) and [Slices](./../slices/).

* * *

## 📏 Usage

Models are closer to types declaration.

_models/npm_package.ts_

```tsx
interface NpmPackage {
  flags: { unstable: boolean };
  package: {
    name: string;
    version: string;
    description: string;
    links: {
      npm?: string;
      homepage?: string;
      repository?: string;
    };
  };
}

export default NpmPackage;
```

* * *

## 🔗 References

-   <https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/>
