---
title: "Sisyphus Almanac"
date: 2026-11-21
description: "A Mac app for writing down the day’s work and taking a moment to look back."
draft: false
language: en
original_language: ko
category: development-log
translation_of: sisyphus-almanac-1-1-1
translation_reviewed: true
seo_title: "Sisyphus Almanac 1.1.4 | Calendar, Bullet Journal & Daily Log for Mac"
seo_description: "Sisyphus Almanac brings Apple Calendar, Reminders, Notes, Obsidian, Mail, and a Bullet Journal-inspired Daily Log into one macOS workspace."
---

## The Stones We Push Every Day

Sisyphus Almanac 1.1.4 follows your Mac’s language in English or Korean. This public preview fixes a Paper Capture save crash, adds reviewable completion and original-symbol controls, and makes journal entries and completed tasks easier to browse by date.

**Every day, we push the stone again.**

Public test 1.1.4 · macOS 15.0 or later · Apple silicon and Intel binaries included

<a class="button" href="https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/download/v1.1.4/Sisyphus_Almanac_1.1.4_macOS.dmg">Download · 1.1.4</a> · [User Manual](#manual) · [Development Journal](#development-journal)

This public test version is ad hoc signed and has not been notarized by Apple. macOS may block it from launching.

<figure class="journal-screenshot">
<a href="../../images/almanac-1-1-0/almanac-today.png"><img src="../../images/almanac-1-1-0/almanac-today.png" alt="Sisyphus Almanac Today dashboard with a multiline rapid logging preview" width="2200" height="1696" /></a>
<figcaption>Today dashboard · Sample data · Version 1.1.0 screen, predating these changes</figcaption>
</figure>

[Capture Ideas as They Come](#daily-log) · [Review Today, Plan What Comes Next](#daily-review) · [From Events to Related Resources](#calendar) · [Download and Installation](#download) · [Documentation](#documentation)

<h2 id="why">Bring Your Daily Work Together</h2>

Schedules live in Calendar. Tasks live in Reminders. Notes and project records may be stored in Apple Notes or Obsidian, while important details often arrive by email.

Almanac brings these existing resources together. Select an event, access related materials, and bring the day’s work into a single record.

Upcoming, Calendar, Reminders, Notes, and Obsidian default to **This Mac** and remember your data source selection across launches.

<h2 id="today">Your Day at a Glance</h2>

Today shows your schedule, reminders, upcoming events, and recent mail in one place. The Today screenshot above uses sample data.

<h2 id="daily-log">Capture Ideas as They Come</h2>

Write several Bullet Journal-style lines and preview them before saving.

| Symbol | Action |
| --- | --- |
| `*` | Task |
| `X` | Completed |
| `>` | Migrated |
| `<` | Scheduled |
| `@` | Event draft |
| `-` | Note |
| `!` | Priority |
| `+` | Idea |

~~~text
@ 10:00 Project meeting
* Review mix revisions
- Compare with yesterday’s work
+ New plugin idea
! * Back up important files
~~~

For `X`, `>`, or `<`, enter a space and text after the symbol, then choose the target task in the preview. Pick a date when moving or scheduling a task. Daily Log saves event drafts and tasks in Almanac. Use Quick Capture and select a destination to save to Apple Calendar or Reminders.

Choose **Task, Event, Note, or Idea** from the type menu (default: Task), or enter symbols directly. Symbols take precedence on their line. Preview with **⌘⇧P**, save with **⌘Return**, and focus input with **⌘⌥L**. Finish Korean text composition before saving.

<h2 id="daily-review">Review Today, Plan What Comes Next</h2>

Check what you finished, review what remains, and save a short reflection. Choose the task and date when you migrate or schedule it. The original date keeps a history of the move, and you can undo the last local change.

The status menu offers completion, migration, scheduling, and priority. Confirm the target task and date before applying.

<h2 id="paper-capture">From Paper to Daily Log · Experimental</h2>

Paper Capture uses local Apple Vision OCR. Version 1.1.4 fixes a selected-row save crash and adds original-symbol and completed-task controls for review. Compare each row with the image, correct text, kind, date, symbol, and priority, then select the entries to save. Original symbols and explicitly specified event times are preserved. OCR stars, reference marks, and some characters still need manual checking.

Undo Save restores the image and reviewed rows while the sheet remains open. Starting another image or deleting the draft clears the previous undo snapshot. Images are limited to 20 MB and 32 megapixels. Closing is blocked during recognition, and unreadable drafts are protected from automatic replacement. Multi-window, forced-quit, and disk-error recovery remain incomplete. Keep original scans separately.

<h2 id="entries-by-date">Find Entries and Completed Tasks by Date</h2>

Entries by date appears above Quick Entry. Choose All, Remaining tasks, or Completed, and navigate with the date field, previous/next day, Today, or Recorded dates. Daily Review has a separate Completed tasks section. These lists use the assigned journal date, not a separately recorded completion timestamp. Moving a task changes its assigned date and retains movement history.

<h2 id="calendar">From Events to Related Resources</h2>

Browse Apple Calendar events by day, week, or month. Link Apple Reminders, notes, and Mail references from the event details. Attach a revision email to a mixing session or a note to a piano practice event, then open the source when you need it.

<figure class="journal-screenshot">
<a href="../../images/almanac-1-1-0/almanac-calendar.png"><img src="../../images/almanac-1-1-0/almanac-calendar.png" alt="Sisyphus Almanac weekly calendar with sample events" width="1858" height="1502" loading="lazy" /></a>
<figcaption>Weekly calendar · Sample data · Version 1.1.0 screen, predating these changes</figcaption>
</figure>

Use **Add Event** or **Open Calendar App** above the calendar. The form starts on the date being viewed. Saving needs full Calendar access. Actual saving to the live service remains unverified.

<h2 id="notes">Keep Your Notes Where They Belong</h2>

Browse Apple Notes and preview text before opening the source note. In Obsidian, browse Markdown from the vault you select and open it in its original location.

<h2 id="mail">Connect Email to Your Work</h2>

Almanac reads up to 12 recent inbox messages per active Apple Mail account and shows the subject, sender, date, and read status. Today shows the three latest messages. You can manually link a Mail reference to an event or reminder and open it in Apple Mail. Inbox access requires macOS permission. Use Apple Mail to send, reply to, or delete messages.

Use **Open Mail App** to open Apple Mail directly.

Today titles and inbox rows open the original in Apple Mail; arrow-key selection may also open messages. Mail refreshes on first load and manually. Body and attachment previews are unavailable.

<h2 id="finance">Your Existing Excel Workbook</h2>

Finance links a selected Excel workbook as a read-only reference. Check its name and path and open the original when needed. To use OneDrive, select the workbook from its local sync folder in Finder. Almanac leaves the workbook untouched, and OneDrive handles server sync.

Korean and English follow the system or app-specific macOS language setting. Relaunch after changing it. Personal records and mail contents are not translated.

<h2 id="menu-bar">Quick Access from the Menu Bar</h2>

Open a summary of today’s events and reminders from the monochrome Sisyphus icon. You can show or hide the menu bar icon in Settings. [Tuck](../../software/tuck/) is a separate utility for organizing menu bar icons.

<h2 id="name">Why Sisyphus Almanac?</h2>

An almanac brings dates, information, and records together. Sisyphus is the figure who pushes a boulder uphill, again and again.

When one day ends, another begins with new tasks. But no two days are exactly the same. We make things, learn things, and leave records behind.

I wanted a place to bring those days together.

**Every day, we push the stone again.**

<h2 id="download">Download and Installation</h2>

**1.1.4 · Build 116 · macOS 15.0 or later · Apple silicon and Intel binaries included**

[Download · 1.1.4](https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/download/v1.1.4/Sisyphus_Almanac_1.1.4_macOS.dmg) · [SHA-256 checksums](https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/download/v1.1.4/SHA256SUMS.txt)

Open the DMG and drag Sisyphus Almanac.app to Applications. This public test build is ad hoc signed and has not been notarized by Apple, so macOS may block it from opening. Calendar, Reminders, Notes, Mail, and file access require the corresponding macOS permissions. The package includes an Intel binary. Intel hardware and the minimum supported OS have not been verified on physical machines.

To verify the download, put the DMG and checksum file in the same folder and run `shasum -a 256 -c SHA256SUMS.txt`.

<h2 id="release-notes">Version 1.1.4 · Build 116</h2>

November 21, 2026 · Public preview

[GitHub release](https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/tag/v1.1.4)

## System language

The app follows the macOS system language or the app-specific language setting. English and Korean are supported; English is the fallback for unsupported languages. This build does not force a language. Your journal entries, calendars, notes, and mail are not translated.

## Paper Capture fixes

- Fixed a crash when saving selected OCR rows cleared the list while SwiftUI still held references to its previous array positions. Rows now use stable identifiers.
- Added reviewable completion suggestions for leading check marks and terminal X marks, including X attached to Korean text. Ordinary words such as mix and Linux are preserved.
- Added an original-symbol selector and a separate completed-task control. Star and reference marks are not assumed to be reliable OCR classifications; importance remains a separate choice.
- Preserved selected original symbols and event times in saved entries. An explicit time toggle avoids showing a default time when no time will be stored. Kept older draft and journal files readable.
- Undo Save restores the image and reviewed rows while the review sheet remains open. Starting a different image or deleting the draft clears the previous undo snapshot so it cannot replace a newer draft.
- Added date-header review and an explicit warning when the photographed date is uncertain. OCR output is never saved automatically.
- Added image limits of 20 MB and 32 megapixels. Closing is blocked while recognition is in progress; results from a dismissed recognition task are not applied.
- An unreadable draft is no longer overwritten by automatic draft persistence. A failed draft write is shown instead of being replaced by a success message.

## Journal entries by date

Entries by date is now placed above quick entry. All, Remaining tasks, and Completed filters make saved records easier to find. Use previous/next day, the date field, Today, or Recorded dates to navigate. Daily Review has an explicit Completed tasks section.

Dates mean assigned journal dates, not a separate timestamped completion ledger. Moving a task changes its assigned date and leaves its existing movement history.

## Existing 1.1.3 features retained

The four entry-kind menu, direct symbol input, calendar Add Event and Open Calendar App actions, direct Apple Mail opening, and English/Korean UI remain available. Calendar writes require macOS full access and an explicitly selected writable calendar. Daily Log event entries remain local until you separately create an external event.

## Validation and limitations

The previous Paper Capture fix was exercised with the supplied handwritten image in an isolated app: five entries, three completed tasks, save/undo/resave, original-symbol editing, and duplicate rejection. This release adds separate bilingual journal/Paper Capture UI checks and unit regression checks. See the release verification document for the exact final results; build success alone is not a full integration pass.

This is an ad hoc signed, unnotarized public preview. macOS may block launching it. The package contains Apple silicon and Intel binaries; Intel and minimum-OS hardware execution are not verified.

Handwritten stars/reference marks and some characters can still be misread. Dates and completion are suggestions that require review. PDF and multi-page scans, automatic OneDrive journal backup/restore, Daily Log link editing, and Finance mail references are not implemented. Mail remains a bounded inbox-header reader: up to 12 messages per account, three on Today, initial/manual refresh, no periodic timer. Mail body/attachment previews, unread-state preservation under all conditions, moved/deleted-message recovery, and slow-script responsiveness remain unverified or incomplete.

Multi-window draft/storage locking, hard-quit/disk-error recovery, clipboard/drag-and-drop coverage, detailed Korean IME key combinations, and full Notes/EventKit/Finance/OneDrive regression are not complete. Keep original scans independently. Existing 1.1.1–1.1.3 release files are unchanged.


<details>
<summary>Previous release notes · 1.1.1–1.1.3</summary>

### Version 1.1.3 · Build 114

November 21, 2026 · Public test

[Official GitHub release](https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/tag/v1.1.3)

## Logging and review

- Added a task, event, note, and idea type menu to Daily Log, with Task selected by default.
- Direct symbol entry remains available. Symbols on a line take precedence over the type menu. Check each type in Preview before saving.
- The status menu supports completion, migration, scheduling, and priority. Duplicate priority actions were removed.
- Use ⌘⌥L to focus input, ⌘⇧P to preview, and ⌘Return to save. A guard prevents saving while Korean text composition is active.

## Experimental Paper Capture

- Select an image, drop an image, or paste an image from the clipboard for local Vision OCR on your Mac.
- Compare the source and recognition results side by side. Edit text, type, date, and priority before saving selected items to Daily Log.
- All items start unselected. A duplicate candidate with the same date, type, and content blocks saving.
- Paper Capture does not automatically write to external Calendar or Reminders.

## Calendar and Mail

- Added Add Event and Open Calendar App above the calendar. The event form starts with the date currently being viewed.
- Saving requires full macOS Calendar access. A return path to the saved event is implemented.
- Recent mail on Today and inbox rows can open the original in Apple Mail. Changing selection with arrow keys can also open the original.
- Mail shows up to 12 inbox messages per account and three recent messages on Today. It loads initially and refreshes manually, without a periodic refresh timer.

## Korean and English

The interface follows the system language or the app-specific macOS language setting. Dates are no longer fixed to Korean. Personal records and message contents are not translated.

## Reported verification scope

The release documentation reports a Universal Release build, seven unit tests, Korean and English startup UI, type and symbol parsing, completion, migration and undo, some printed-text OCR, and comparison with actual originals for already-read mail. The two calendar buttons and event form were checked in the installed app. These checks were not all repeated on the same final package.

## Known limitations and unverified behavior

- This is a public test version, ad hoc signed and not notarized by Apple. macOS may block launch.
- Korean handwriting recognition accuracy, physical drag-and-drop and clipboard use, draft restoration after relaunch, and recovery from save errors are not sufficiently verified.
- Paper Capture does not save recognized event times. Enter events requiring a time separately through Add Event.
- Original preservation is not fully guaranteed with damaged drafts, disk errors, or multiple windows. Keep the source image separately. Successful saving clears the review image and draft items.
- PDF, OneDrive record backup and restore, Daily Log attachment editing, and Finance mail-reference editing are not implemented.
- Mail body and attachment previews and arbitrary mailbox selection are unavailable. Unread status before and after simple retrieval, recovery after originals are moved or deleted, and responsiveness during slow retrieval remain unverified.
- Detailed input-method key behavior during Korean composition, complete external-service regression, Intel hardware, macOS 15.0 hardware, and every window size and mode remain unverified.
- Actual calendar event saving was not verified for this change because Calendar permission was not granted in the installed app. No test events were created in personal calendars.

Existing 1.1.1 and 1.1.2 public files remain available. Existing Daily Log formats and connection metadata are retained.


### Previous version · 1.1.2

Released November 18, 2026.

- Added **Open Mail App** to open Apple Mail directly from the Mail screen.
- Upcoming, Calendar, Reminders, Notes, and Obsidian now default to **This Mac**.
- Data source selections are remembered across launches.
- Includes the DMG installation window spacing improvements introduced in 1.1.1.

[GitHub release](https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/tag/v1.1.2)

### Previous version · 1.1.1

Adjusted the spacing between the app icon, arrow, and Applications folder in the DMG installation window.


</details>

<h2 id="documentation">Documentation</h2>

- [Release Notes — 한국어](../sisyphus-almanac-1-1-1/#release-notes)
- [Release Notes — English](../sisyphus-almanac-1-1-1-en/#release-notes)
- [User Manual — 한국어](../sisyphus-almanac-1-1-1/#manual)
- [User Manual — English](../sisyphus-almanac-1-1-1-en/#manual)
- [Development Journal — 한국어](../sisyphus-almanac-1-1-1/#development-journal)
- [Development Journal — English](../sisyphus-almanac-1-1-1-en/#development-journal)
- [1.1.0 한국어](../sisyphus-almanac-1-1-0/)
- [1.1.0 English](../sisyphus-almanac-1-1-0-en/)

<details id="manual" open>
<summary>User Manual · 1.1.4</summary>

[Download English manual](https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/download/v1.1.4/USER_MANUAL.en.md)

<h2 id="manual-section-1">Install and language</h2>

Requires macOS 15.0 or later. Quit an older copy, open the DMG, and drag Sisyphus Almanac.app to Applications. Launch the installed copy rather than a development build. The app is ad hoc signed and not notarized; macOS may block it. Apple silicon and Intel binaries are included, but Intel execution is unverified.

English and Korean follow the system or app-specific macOS language preference. Restart after changing the app language. English is the fallback for other languages. Dates follow the system region; your own content is not translated.

<h2 id="manual-section-2">Today and source selection</h2>

This Mac shows connected data. Sample shows examples. Source choices persist across launches. Connect each source through its own permission flow; denying one service does not require resetting your journal. Replacing a development app can produce a separate permission entry in System Settings.

<h2 id="manual-section-3">Entries by date and completed tasks</h2>

1. Open Today and find Daily Log. Entries by date appears above Quick Entry.
2. Choose a date with the date field, previous/next day, Today, or Recorded dates. The menu includes entry dates and movement-origin dates.
3. Select All to see records, Remaining tasks for actionable tasks, or Completed for completed tasks. Notes, ideas, and local event drafts appear under All. Excluded records are not shown in these filters; movement/exclusion history remains in Daily Review where available.
4. Daily Review separately lists Completed tasks and remaining tasks, and lets you save a reflection.

The selected date is the entry's assigned journal date. Completing a task does not create a separate date-stamped completion-history view. Moving a task changes its assigned date and keeps movement history; go to the original day to inspect that history. A task completed later can therefore appear under its assigned date rather than the day you clicked Complete.

<h2 id="manual-section-4">Write journal entries</h2>

Choose Task, Event, Note, or Idea before typing. The default is Task. Type content without a symbol, or use explicit prefixes. Explicit symbols take precedence; Preview shows the final interpretation before saving.

```text
* Review mix
! * Important task
@ 14:00 Piano practice
- Session notes
+ Arrangement idea
```

Type an asterisk with Shift+8 on a standard English keyboard and add a space after the prefix. The Task kind menu avoids typing a symbol. A displayed bullet is not a separate dot-input shortcut. A numeric zero is ordinary content, not a task command.

Use X, >, and < with a space and text for the existing completed/moved/scheduled workflow; select the target task and date in Preview. These commands act on a chosen existing task. Paper Capture completion suggestions instead create reviewed imported tasks with the selected state.

Focus input with Command+Option+L, preview with Command+Shift+P, and save with Command+Return. Finish an active Korean text composition before saving. Detailed IME key behavior remains only partially tested.

Local event entries in Daily Log do not create Apple Calendar events. Use Add Event or Quick Capture for external writes.

<h2 id="manual-section-5">State changes and undo</h2>

Use a record's State menu to complete, move, assign a future date, or toggle importance when the action is available. Confirm the destination date before applying a move. Use the Daily Log undo button for the most recent local change. Undo is not an unlimited history across app restarts, and completing an existing task does not offer a general reopen control.

<h2 id="manual-section-6">Paper Capture</h2>

1. In Daily Log, choose Paper Capture, then Choose image. Image drop and image clipboard paste paths also exist; their full compatibility is not verified.
2. Use an image up to 20 MB and 32 megapixels. PDF and multi-page scans are not supported. Recognition runs locally with Apple Vision. Keep the original scan independently.
3. Compare each row with the image. Edit text, kind, date, original symbol, importance, and Completed task as needed. For event rows, enable Specify start time if a time is needed; only an explicitly present time is shown and saved.
4. Leading check marks and terminal X marks can propose completion. Star/reference glyphs may be confused with each other or with text such as the digit 1. Fix these manually. Choosing a symbol does not implicitly mark importance.
5. A page date may be proposed. If the date is uncertain, the app shows the recognized date text and asks you to check each item's date. It does not invent a corrected date.
6. Every row begins unselected. Select only verified items and save them to Daily Log. Nothing is automatically written to Calendar or Reminders.
7. Exact same-day, same-kind, same-text duplicates stop the whole batch. Deselect or edit duplicates. Similar wording, scan fingerprints, or external-service duplicates are not checked.

Draft image bytes and reviewed rows are stored in the app container at Library/Application Support/Sisyphus Almanac/Paper Capture/ReviewDraft.json. Saving successfully clears the review draft. Undo Save can restore the image and rows while the sheet remains open. Starting another image or deleting the draft clears that undo opportunity.

An unreadable draft is protected from automatic replacement. A failed draft write displays an error; keep the window and your original scan until the problem is resolved. Closing is disabled during recognition. Multi-window editing, forced termination, disk failures, and all clipboard formats are not fully verified; do not use the temporary draft as your only copy.

<h2 id="manual-section-7">Calendar and reminders</h2>

In Calendar, navigate by date and day/week/month. Add Event opens the existing capture form with the displayed date. Enter title, date/time, duration, and a writable calendar. Request macOS full access if prompted. Save explicitly; a successful save routes back to the new item. Real-service save-and-refresh has not been fully verified in the release environment.

Open Calendar App launches Apple Calendar. It does not promise to select a specific event or edit an existing one. Quick Capture also creates reminders with an optional due date in a selected list.

<h2 id="manual-section-8">Mail and related materials</h2>

Configure accounts in Apple Mail first, then connect them in Almanac and approve the expected automation request. Inbox loading is bounded to 12 messages per account and Today shows the latest three. Search covers loaded headers, not the whole server. Initial loading and Refresh are available; there is no periodic refresh timer.

Click a dashboard message or select an inbox row to open the original in Apple Mail. Keyboard selection changes may also open a message. Open Mail App launches Mail itself. Opening an unread original may mark it read in Mail. Almanac does not provide send, reply, forward, delete, move, or read-state mutation controls. Body/attachment rendering and arbitrary mailbox selection are not provided.

Calendar/reminder material links can hold a title and message:// address or Message-ID. Moving/deleting a message or changing an account may break a reference. Daily Log link editing and Finance mail links are not implemented.

<h2 id="manual-section-9">Notes, Obsidian, Finance, and menu bar</h2>

Notes uses Apple Notes automation. Obsidian reads Markdown from a folder you choose and retains a security bookmark. Finance links a chosen Excel workbook; choose a local OneDrive file if appropriate. Opening a linked file is not proof of OneDrive server sync. Almanac does not modify workbook values, extract receipt totals, or provide automatic journal backup/restore.

Toggle the menu-bar icon in Settings. Avoid leaving development copies open alongside the installed app. For support, provide the version, steps, and error text; remove private mail, accounts, financial data, and scan content from public screenshots.

</details>

<h2 id="development-1-1-4">Development Journal · Keeping the Source in View</h2>

This update focuses on reviewing a captured record and browsing saved entries by date. Paper Capture preserves reviewed original symbols and explicit event times, and Undo Save can restore the image and reviewed rows in the open sheet. The dated record list and completed-task section help revisit assigned journal days. Recognition still needs source comparison, and recovery and external-service regression remain incomplete.

<h2 id="development-1-1-3">Development Journal · Reviewing What We Capture</h2>

Version 1.1.3 adds menus alongside direct symbol entry so daily logging can start without memorizing markers. Paper Capture follows the same approach: bring a paper record into view, compare it with locally recognized text, and choose what to keep. Human review remains part of the workflow. Handwriting accuracy and draft recovery still need testing.

<details id="development-journal">
<summary>Development Journal · The Stones We Push Every Day</summary>

This journal entry dates to private testing of 1.1.0. Version 1.1.4 is the current public test build.

**Jovaris Audio | macOS Development Journal | v1.1.0**

Someone in an open chat group mentioned that they had built their own program to manage schedules and tasks in one place.

They were using it on Windows.

I hadn't seen the program, and I didn't know how it worked. It was simply the idea of bringing everything together that caught my attention.

It made me want to build something similar for myself.

But I use a Mac, so I decided to make something that would fit my own environment.

Apple Calendar, Reminders, Notes, and Obsidian were already part of my workflow. I could keep what I needed, leave out what I didn't, and build around the way I actually use my computer.

That's how **Sisyphus Almanac** began.

### Starting with the calendar

The original idea was fairly simple.

A navigation sidebar on the left, a calendar in the center, and a detail panel on the right.

Select an event, and the related tasks and notes appear alongside it.

For example, opening a piano practice event could lead to a list of pieces to practice and notes from a previous session.

The same idea could apply to music production, personal appointments, or almost anything else.

I also considered adding project management tools, including a Kanban board.

But I left them out.

There's not much point in making an application to simplify everyday life if it ends up creating another system that needs managing.

I started with a sample weekly calendar and gradually connected real Apple Calendar and Reminders data.

Apple Notes was added for browsing and text previews, while Obsidian was connected through a user-selected folder of Markdown files.

One thing became clear along the way: opening a folder once and being able to open it again after restarting the application are two different problems.

### Making it feel like an application

As more functionality was added, the application became more capable.

That didn't necessarily make it look better.

The first Today screen was mostly a few cards showing today's events, tasks, and upcoming appointments.

In a large window, there was simply too much empty space.

I tried a mountain-themed background and adjusted the cards and colors, but the real question was what the screen should actually be used for.

Then I thought about the Bullet Journal method.

The application already had events, tasks, and notes. Why not bring them together into a daily record rather than simply displaying them in separate cards?

That idea led to **Daily Log and Daily Review**.

Daily Log lets me write tasks, event drafts, notes, and ideas in a few quick lines, then preview how they're interpreted before saving them.

I adapted the journal symbols to make them easier to enter from a normal keyboard:

- `*` Task
- `X` Completed
- `>` Migrated
- `<` Scheduled for later
- `@` Event
- `-` Note
- `!` Priority
- `+` Idea

Instead of recreating a paper Bullet Journal exactly, I wanted a version that felt natural on a Mac.

Daily Review lets me see what I've finished, what remains, and write a short reflection.

I didn't want every unfinished task to move automatically to tomorrow. Some things belong next week, some need a specific date, and some may no longer be worth doing.

So I added user-controlled migration, with a record of where a task came from and an option to undo the move.

I've tested Korean multiline entry, persistence, migration, and undo in isolated application runs.

The idea is simple: keeping a daily record shouldn't have to become another complicated task.

### One menu bar icon, and a fourth zone in Tuck

I wasn't sure whether Almanac needed a menu bar icon.

On a MacBook, the notch leaves limited room for status icons, and I already had plenty of them.

Adding one more could make the menu bar even more crowded.

Still, being able to check my next event or remaining tasks without opening the main window seemed useful.

So I made the Almanac menu bar icon visible by default, with an option to turn it off.

For the symbol, I chose a silhouette of Sisyphus pushing a boulder uphill.

The design was simplified into a person, a round stone, and a short slope, using a monochrome shape suitable for the menu bar.

But the bigger issue wasn't just adding another icon.

It was figuring out what to do with a menu bar that kept getting more crowded.

I had also been developing a separate macOS utility called **Tuck**.

Tuck is designed to organize menu bar icons by folding away the ones I don't need to see all the time.

The original approach separated icons that should remain visible from those that could stay hidden.

But some applications, such as KakaoTalk and Avid Link, fall somewhere in between. I don't need their icons in sight all day, but I still want to reach them quickly.

That led to an additional middle section and eventually a three-zone layout with two levels of folding.

There was still one problem.

Even when the icons were organized, expanding them meant using more space across the top of the screen.

And on a notched MacBook, that space is limited.

So I added a fourth zone.

**Zone 4 opens in a separate area below the menu bar.**

The first three zones organize icons within the menu bar. The fourth provides another place to access them without having to stretch the menu bar farther across the screen.

Creating that space wasn't the end of the work.

There was also a loading delay when opening the lower area. A feature doesn't feel particularly convenient if using it means waiting for the interface to respond.

I addressed that delay as well.

The fourth zone and the loading-delay improvement are now included in the Tuck version I'm distributing.

Tuck and Sisyphus Almanac remain separate applications.

Almanac is for schedules, tasks, and daily records. Tuck is for managing menu bar icons.

But working on one brought up a problem that helped shape the other.

They serve different purposes, but both grew out of the same idea: making my Mac a little more comfortable to use.

### Mail seemed like the next thing to add

What began as a calendar-centered application gradually expanded.

Mail seemed like a useful addition, particularly for connecting an email to a task or appointment.

For example, a revision request could be linked directly to a mixing session.

I started with manual message references.

I could enter a title and a source message address, save the reference, and open the original in Apple Mail.

I also tested opening an actual Naver Mail message through its Message-ID. A separate sandboxed test application successfully opened the correct original message.

Later, I expanded the Mail feature.

The current version 1.1.0 development materials describe a limited inbox view that retrieves up to 12 messages per active Apple Mail account, showing the sender, subject, date, and read status.

The Today screen also displays the three latest messages.

I don't intend to turn Almanac into a complete email client.

I want to see the messages that matter and connect them to the things I'm working on, while Apple Mail remains the place where the original messages live.

The feature is now described in the latest release materials, while account permissions and full real-world behavior remain part of the ongoing validation work.

### Adding Finance without replacing Excel

I also added a Finance section.

I already had an Excel workbook for managing my finances, and I didn't see much reason to recreate the entire thing inside Almanac.

Instead, I chose to link the existing workbook.

A file in a local OneDrive folder can be selected and associated with the Finance screen.

The current approach is read-only from Almanac's side. It doesn't modify workbook cells, formulas, or formatting.

Local workbook linking and file-content matching have been checked. Cloud synchronization status and opening the linked file directly in Excel still need separate verification.

Eventually, I'd like to explore monthly summaries, spending breakdowns, and charts.

But for now, simply connecting the material I already use is a reasonable place to start.

### What about handwritten notes?

Adding Bullet Journal features brought up another idea.

What if I could write on paper, take a photo, and bring the page into Almanac?

The application could recognize the handwriting, identify journal symbols and dates, and suggest entries for the Daily Log.

I called this idea **Paper Capture**.

Handwriting recognition, especially for Korean text mixed with symbols and numbers, still needs to be tested.

I don't want a photograph to create events or tasks automatically without review.

The idea is to let me inspect, correct, and approve the recognized entries before saving them.

OneDrive could eventually store the original images and backup copies of journal records.

These are planned features, not completed ones.

### Why Sisyphus Almanac?

An almanac is a collection of dates, information, and records.

And Sisyphus is the figure who pushes a boulder uphill, over and over again.

Finish one task, and another appears. Complete one project, and the next one is waiting.

In a way, everyday life can feel a little like pushing that boulder.

But the days aren't truly identical.

We make things, learn things, and leave records of what we've done.

I wanted a place to bring some of those things together.

That's why the tagline is:

**Every day, we push the stone again.**

### Version 1.1.0

Sisyphus Almanac is a macOS application built with Swift and SwiftUI.

The current development version includes calendar and reminder views, Apple Notes and Obsidian access, Mail features, Daily Log and Daily Review, a menu bar summary, and Excel workbook linking.

Several builds and isolated feature tests have passed, but full integration testing and real-world validation are still in progress.

I've chosen version 1.1.0 as the personal development baseline to preserve in a private GitHub repository.

The public website can share the development story and sample screenshots, but the application itself is still being privately tested.

Meanwhile, Tuck has reached a separately distributed version with four zones, including the lower expanding area and the loading-delay fix.

The whole thing started with someone mentioning an application they had built for Windows.

I took that idea and started building something for my own Mac.

I'm not trying to create some grand productivity platform.

I just want a tool that makes my everyday work a little easier.

After all, if I have to keep pushing the stone every day, I might as well know which stone I'm supposed to push today.

</details>
