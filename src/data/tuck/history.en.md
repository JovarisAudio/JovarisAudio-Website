### 1.0.0 — MenuHider

**Initial Version**

The first version introduced the core functionality of collapsing and expanding menu bar icons without quitting their applications.

#### Features
- Define the hidden section by dragging menu bar icons while holding `⌘ Command`.
- Collapse or expand one section using an arrow button.
- Configure launch at login and restore the last visibility state through a settings window.
- Build a Universal DMG containing Apple Silicon and Intel executables.

**Development status:** Initial build and Universal DMG created. Public release status has not been verified.

### 1.0.1 — MenuFold

**Application Renaming**

The application was renamed from MenuHider to MenuFold while retaining its original single-section collapsing mechanism.

#### Changes
- Renamed MenuHider to MenuFold.
- Preserved the existing collapse-and-expand behavior.
- Prepared a Universal installer under the MenuFold name.

**Development status:** Universal installer preparation recorded. Public release status has not been verified.

### 1.0.2 — Tuck

**Brand Identity and Interface Redesign**

The application was renamed Tuck and introduced a wood-inspired visual identity.

#### Changes
- Renamed the application and updated its icon.
- Added a light oak-colored collapse button.
- Added a dark wood-colored options button.
- Introduced a wood-grain settings popover.
- Changed to a menu-bar-only application interface.
- Added automatic dismissal of the popover.
- Created a wood-themed DMG installation layout.

#### Testing
Initial collapsing and expanding behavior was confirmed on:
- Apple Silicon Mac
- macOS Sequoia 15.8

**Development status:** Basic operation verified in the environment above. Full compatibility and public release status have not been verified.

### 1.0.3 — Version Alignment and GitHub Upload

**Packaging and Repository Update**

The application and distribution packages were aligned to version 1.0.3.

#### Changes
- Updated the application version to 1.0.3.
- Aligned the Universal DMG and ZIP packages with the application version.
- Uploaded source code and packages to the `main` branch of `JovarisAudio/MenuHider`.
- Replaced the locally installed application and confirmed that it launched.

#### Verification
- Local installation replacement: Confirmed
- Application launch after replacement: Confirmed
- GitHub `main` branch upload: Confirmed
- Automatic launch after an actual logout and login: Not retested
- Official GitHub Release publication: Not verified

### 1.0.4 — Three-Section Menu Bar

**Local Test Build**

The original two-section system was expanded into three sections separated by two collapsible boundaries.

#### Changes
- Added a left section for occasionally used applications.
- Added a middle section for quick-access applications.
- Retained the always-visible right section.
- Introduced two collapsible boundaries.
- Added three visibility states controlled by the light wood button.

#### Visibility States
1. Fully Collapsed
2. Quick Access Expanded
3. Fully Expanded

**Development status:** Local test build installed on the development Mac. GitHub upload and public release have not been verified.

### 1.0.5 — Unified Control Button

**GitHub Repository Upload**

The interface was simplified by combining the collapse and options controls into a single dark wood button.

#### Changes
- Removed the separate light wood collapse button.
- Consolidated controls into one dark wood button.
- Left-click: Cycle through the three visibility states.
- Right-click: Open options.
- Prepared Universal DMG and ZIP packages.
- Generated package checksums.

#### Verification
- Local application launch: Confirmed
- Universal DMG, ZIP, and checksums uploaded to GitHub `main`: Confirmed
- Official GitHub Release publication: Not verified

### 1.0.6 — Woodpecker Boundary Design

**Local Design Test**

The leftmost boundary line was replaced with a character illustration.

#### Changes
- Replaced the leftmost boundary with a right-facing woodpecker.
- Installed the design locally for visual evaluation.
- Decided to refine the boundary artwork further.

**Development status:** Local design test only. Public release has not been verified.

### 1.0.7 — Squirrel and Acorn Artwork

**Local Design Test**

Both boundaries received colorful character illustrations.

#### Changes
- Introduced a squirrel running diagonally upward to the right at the left boundary.
- Added a second squirrel carrying an acorn at the right boundary of the middle section.
- Experimented with character-based visual distinctions between the two boundaries.

**Development status:** Local design test only. Public release has not been verified.

### 1.0.8 — The Squirrel and the Rolling Acorn

**Local Development Build**

The boundary artwork was refined to improve clarity and readability at small menu bar sizes.

#### Changes
- Adjusted the running pose of the left squirrel.
- Added motion lines behind the squirrel.
- Added small drops of sweat beneath its feet.
- Replaced the middle section's right boundary artwork with a single rolling acorn.
- Added a small right-pointing `>` beside each boundary illustration.
- Centered the title at the top of the DMG installation window.
- Centered the installation instructions and developer credit at the bottom of the DMG window.

#### Design Rationale

In version 1.0.7, the squirrel carrying an acorn was difficult to recognize at the small size used in the macOS menu bar.

To improve readability, the right boundary of the middle section was replaced with **a single rolling acorn**.

This created a clearer visual story: the squirrel at the left boundary is chasing the acorn rolling toward the right.

The small `>` symbols reinforce the shared direction of movement and help visually identify the boundaries.

#### Verification
- Design revisions completed within version 1.0.8.
- Local application launch: Confirmed
- Application inside the Universal DMG: Inspected
- GitHub upload and public release: Not verified

### 1.1 — Official Release

Tuck 1.1 brings together the three-section menu bar, two-stage folding, and one-button control. The squirrel chases a rolling acorn across the two folding boundaries. The DMG centers its instructions and the four Finder item names within their label boxes.

- **Released:** November 15, 2026, through GitHub Releases in the existing JovarisAudio/MenuHider repository.
- **Compatibility:** macOS 13 or later. Universal DMG and ZIP contain Apple silicon and Intel executables.
- **Verification:** Both package checksums were verified against the uploaded assets. Tuck 1.1 was installed and launched on an Apple silicon Mac. Intel hardware and launch after signing out and back in remain unverified.
- **Signing:** The app is ad-hoc signed and has not been notarized by Apple.

### 2.1 — Experimental Zone 4

Introduced the wooden Zone 4 panel, item selection in Edit, and icon names on hover. Edit looked up as many as four apps at a time in the background. The speed improvement had yet to be measured.
