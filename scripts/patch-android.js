const fs = require('fs');
const p = 'android/app/src/main/AndroidManifest.xml';
let m = fs.readFileSync(p, 'utf8');
if (!m.includes('LEANBACK_LAUNCHER'))
  m = m.replace(/(<category android:name="android\.intent\.category\.LAUNCHER"\s*\/>)/,
    '$1\n                <category android:name="android.intent.category.LEANBACK_LAUNCHER" />');
if (!m.includes('android.software.leanback'))
  m = m.replace('<application',
    '<uses-feature android:name="android.software.leanback" android:required="false" />\n    <uses-feature android:name="android.hardware.touchscreen" android:required="false" />\n    <application');
if (!m.includes('usesCleartextTraffic'))
  m = m.replace('<application', '<application android:usesCleartextTraffic="true"');
fs.writeFileSync(p, m);
console.log('Manifest patched');
