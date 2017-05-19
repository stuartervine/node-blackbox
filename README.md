node-blackbox

Just a simple library to allow reading of blackbox encrypted files from within node.
It relies on the user having the blackbox CLI installed.

Installation:

~~~
npm install --save node-blackbox
~~~

Usage:

~~~
const blackbox = require('node-blackbox');
~~~

To load the entire contents of an encrypted file:
~~~
const encrypted_file_content = blackbox.loadEncryptedContent('path/to/encrypted.file.gpg');
~~~

To load a single property from an encrypted property file:
~~~
const encrypted_property = blackbox.loadEncryptedProperty('path/to/encrypted.properties.gpg', 'PROPERTY_NAME');
~~~