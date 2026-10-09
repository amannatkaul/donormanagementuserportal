import "./index.css";

const assetRoot = import.meta.env.DEV
  ? `${import.meta.env.BASE_URL}dist/assets/`
  : `${import.meta.env.BASE_URL}assets/`;

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = `${assetRoot}index-BV8vfNig.css`;
document.head.append(stylesheet);

const application = document.createElement("script");
application.type = "module";
application.src = `${assetRoot}index-D2QvHT6c.js`;
application.onerror = () => {
  throw new Error("Could not load the restored donor portal application bundle.");
};
document.body.append(application);
