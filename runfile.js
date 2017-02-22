import {run, generate} from 'runjs';

const task = {
    'create-component': (name) => {
      if (!name) {
        console.error('Component name is missing!');
        return;
      }

      run(`cd components && mkdir ${name}`);
      generate(
        'templates/react-native-component-template.js',
        `components/${name}/${name}.js`,
        {
          COMPONENT_NAME: name
        }
      );
      generate(
        'templates/package-template.json',
        `components/${name}/package.json`,
        {
          COMPONENT_NAME: name
        }
      );
    },
};

export default task
