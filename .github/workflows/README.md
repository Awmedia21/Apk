# My Player: Android / Android TV / Fire OS app

The same web player, packaged as a real Android app with Capacitor.
The app contains no content. Users sign in with their own provider details.

## Build the APK in the cloud (no Android Studio)
1. Create a free GitHub account and a new repository.
2. Upload everything in this folder, keeping the folder structure
   (including `.github/workflows/build-apk.yml`). Easiest from a computer.
3. Open the repo's **Actions** tab, choose **Build APK**, then **Run workflow**.
4. When it finishes (about 5 minutes), open the run and download **my-player-apk**.
5. Unzip it, then install `app-debug.apk` on your phone (allow "install unknown apps").

## Install on a Fire TV stick running Fire OS
Use the Downloader app (enter the file's direct link) or `adb install app-debug.apk`.
Newer Vega OS sticks can't install Android APKs.

## Change the name or ID
Edit `appId` and `appName` in `capacitor.config.json` before building.

## Notes
- Debug-signed APK: fine for personal use. A Play Store release needs a signed release build.
- Web requests go through Capacitor's native HTTP layer, which avoids the browser CORS problem.
  If you ever see odd network errors, set `CapacitorHttp.enabled` to false and test.
- No custom icon yet: it uses the Capacitor default. Add one later with `@capacitor/assets`.
