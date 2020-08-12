import re
import json
from os.path import abspath, join, dirname
import urllib.request
from shutil import copyfile


# Create a request with a valid User-Agent
req = urllib.request.Request(
  'https://chakra-ui.com/getting-started/',
  data=None,
  headers={
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) ' +
    'AppleWebKit/537.36 (KHTML, like Gecko) ' +
    'Chrome/35.0.1916.47 Safari/537.36'
  }
);


# Pull the html from the main docs page, find all links and remove _next links
docs = urllib.request.urlopen(req)
links = re.findall('href="(/[^/_"].*?)"', docs.read().decode('utf-8'))

found = []
pages = []

# Compile all the info for the pages
for url in sorted(set(links)):
  topic = url.split('/')[1].title().replace('-', ' ');
  slug = url.split('/')[1]

  print(slug)
  if (topic not in found):
    found.append(topic)
    pages.append({
        "topic": topic,
        "slug": slug,
        "command": "chakraUIDocs" + topic.replace('-', ' ').title().replace(' ', '')
    })


# Generate command definitions in package.json
with open(join(abspath(dirname(__file__)), '../package.json'), 'r') as f:
  data = json.load(f)
  data['contributes']['commands'] = []
  data['activationEvents'] = []

  for page in pages:
    data['activationEvents'].append("onCommand:extension." + page['command'])
    data['contributes']['commands'].append({
      "command": "extension.{}".format(page['command']),
      "category": "Chakra UI Docs",
      "title": page['topic'],
    })


with open(join(abspath(dirname(__file__)), '../package.json'), 'w') as f:
  json.dump(data, f, indent=4)


# Generate the extension.ts file
with open(join(abspath(dirname(__file__)), '../src/extension.ts'), 'w+') as f:
    f.write("'use strict';\n")
    f.write("import * as vscode from 'vscode';\n\n")
    f.write("export function activate(context: vscode.ExtensionContext) {\n\n")

    for page in pages:
        f.write(
            '    let ' + page['command'] + ' = ' +
            'vscode.commands.registerCommand('
            + "'extension." + page['command'] + "', () => {\n"
            + "        vscode.commands.executeCommand('vscode.open', "
            + "vscode.Uri.parse('https://chakra-ui.com/" + page['slug']
            + "'));\n"
            + "    });\n"
            + "    context.subscriptions.push(" + page['command'] + ");\n"
        )

    f.write("\n}")

print('Extension files have been built.')
