import fs from 'fs';
import gitdownload from 'download-git-repo';
import config from '../../config';
// import Plugin from './model';

export default class PluginHelper {

  static download(repo) {
    gitdownload(repo, config.plugins.dir + repo, () => {
      PluginHelper.loadJson()
        .then((data) => {
          data.push({
            name: repo,
            git: `https://github.com/${repo}`,
            active: false,
          });
          PluginHelper.saveJson(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  static activate(plugin) {
    return plugin;
  }

  static deactivate(plugin) {
    return plugin;
  }

  static remove(id) {
    PluginHelper.loadJson()
      .then((data) => {
        PluginHelper.saveJson(data.filter(el => el.name !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static update(plugin) {
    return plugin;
  }

  static load(id, runtime) {
    if (!id) {
      const data = PluginHelper.loadJson();
      data.forEach((element) => {
        if (element.active) {
          const Plugin = require(config.plugins.dir + element.name).default;
          const plugin = Plugin(runtime);
          console.log('loading plugin %s', element.name);
        }
      });
    } else {
      let data = PluginHelper.loadJson();
      data = data.filter(el => el.name === id);
      console.log(data[0].active);
      if (data[0].active) {
        const Plugin = require(config.plugins.dir + id).default;
        const plugin = new Plugin(runtime);
        console.log('loading plugin %s', id);
      }
    }
  }

  static loadJson() {
    const data = fs.readFileSync(`${config.plugins.dir}plugins.json`, 'utf8');
    return JSON.parse(data);
  }

  static saveJson(obj) {
    return new Promise((resolve, reject) => {
      fs.writeFile(`${config.plugins.dir}plugins.json`, JSON.stringify(obj, null, 2), (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  }
}
