Red Horse Rodeo is a macOS menu bar monitor for whole-system CPU, memory and network activity.

## Install or update

1. Download the 1.1.1 DMG from the official GitHub release. Compare its SHA-256 with the release checksum using `shasum -a 256 Red-Horse-Rodeo-1.1.1.dmg`.
2. If an older version is running, choose **Quit** in its popover. Open the DMG, drag **RedHorseRodeo.app** to **Applications**, and replace the previous copy if prompted. Eject the DMG and open the installed app.
3. Look for the horse in the menu bar. Use **About** to check version 1.1.1 (build 6).

Requires macOS 15.8 or later. The package contains Apple Silicon and Intel binaries. Testing was on macOS Sequoia; Intel hardware and macOS Tahoe compatibility have not been verified.

This build is ad-hoc signed and is not notarized. macOS may block first launch; see [Apple’s instructions for safely opening apps](https://support.apple.com/en-us/102445). Verify the source and checksum before proceeding. Do not disable Gatekeeper.

## Use the app

- Click the horse to see current values. The popover closes after 15 seconds unless **Keep Open** is on.
- At medium and high CPU load, a dust cloud blooms behind the hooves and fades. The horse is the same size and its animation speed is unchanged; the icon uses more menu bar width.
- Choose **Dashboard** for CPU, memory and network graphs. History is sampled roughly once per second, with up to 1,800 samples (about 30 minutes). It resets when the app quits.
- **Show CPU %** toggles the percentage beside the menu bar icon. **Animation Speed** and **Color Animation** adjust the horse display.
- **Launch at Login** is optional. If registration fails or macOS asks for approval, check **System Settings → General → Login Items**.
- To uninstall, turn off **Launch at Login**, choose **Quit**, and move the app from Applications to Trash.

## What the readings mean

CPU is overall load. Memory usage is an estimate based on active, wired and compressed pages; memory pressure is a separate signal from macOS. Network rates add active non-loopback interfaces and may be affected by VPNs or virtual adapters. First or failed samples may show zero. There is no per-app breakdown or persistent history. Routine monitoring does not require Accessibility, Screen Recording or Full Disk Access.

For feedback, email [jovarisaudio@gmail.com](mailto:jovarisaudio@gmail.com) with the version, macOS version, Mac model and steps to reproduce. Avoid including private logs or screenshots. Support and update schedules are not guaranteed.

Copyright © 2026 Jovaris Audio / WH. All rights reserved.
