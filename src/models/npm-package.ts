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
