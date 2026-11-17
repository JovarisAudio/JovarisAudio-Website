---
title: "Sisyphus Almanac"
date: 2026-11-18
description: "A Mac app for writing down the day’s work and taking a moment to look back."
draft: false
language: en
original_language: ko
category: development-log
translation_of: sisyphus-almanac-1-1-1
translation_reviewed: true
seo_title: "Sisyphus Almanac 1.1.2 | Calendar, Bullet Journal & Daily Log for Mac"
seo_description: "Sisyphus Almanac brings Apple Calendar, Reminders, Notes, Obsidian, Mail, and a Bullet Journal-inspired Daily Log into one macOS workspace."
---

## The Stones We Push Every Day

A macOS workspace that connects schedules, tasks, notes, and reference materials into a daily workflow.

**Every day, we push the stone again.**

Public test 1.1.2 · macOS 15.0 or later · Apple silicon and Intel

<a class="button" href="https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/tag/v1.1.2">Download · 1.1.2</a> · [User Manual](#manual) · [Development Journal](#development-journal)

This public test version is ad hoc signed and has not been notarized by Apple. macOS may block it from launching.

<figure class="journal-screenshot">
<a href="../../images/almanac-1-1-0/almanac-today.png"><img src="../../images/almanac-1-1-0/almanac-today.png" alt="Sisyphus Almanac Today dashboard with a multiline rapid logging preview" width="2200" height="1696" /></a>
<figcaption>Today dashboard · Sample data</figcaption>
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

<h2 id="daily-review">Review Today, Plan What Comes Next</h2>

Check what you finished, review what remains, and save a short reflection. Choose the task and date when you migrate or schedule it. The original date keeps a history of the move, and you can undo the last local change.

<h2 id="calendar">From Events to Related Resources</h2>

Browse Apple Calendar events by day, week, or month. Link Apple Reminders, notes, and Mail references from the event details. Attach a revision email to a mixing session or a note to a piano practice event, then open the source when you need it.

<figure class="journal-screenshot">
<a href="../../images/almanac-1-1-0/almanac-calendar.png"><img src="../../images/almanac-1-1-0/almanac-calendar.png" alt="Sisyphus Almanac weekly calendar with sample events" width="1858" height="1502" loading="lazy" /></a>
<figcaption>Weekly calendar · Sample data</figcaption>
</figure>

<h2 id="notes">Keep Your Notes Where They Belong</h2>

Browse Apple Notes and preview text before opening the source note. In Obsidian, browse Markdown from the vault you select and open it in its original location.

<h2 id="mail">Connect Email to Your Work</h2>

Almanac reads up to 12 recent inbox messages per active Apple Mail account and shows the subject, sender, date, and read status. Today shows the three latest messages. You can manually link a Mail reference to an event or reminder and open it in Apple Mail. Inbox access requires macOS permission. Use Apple Mail to send, reply to, or delete messages.

Use **Open Mail App** to open Apple Mail directly.

<h2 id="finance">Your Existing Excel Workbook</h2>

Finance links a selected Excel workbook as a read-only reference. Check its name and path and open the original when needed. To use OneDrive, select the workbook from its local sync folder in Finder. Almanac leaves the workbook untouched, and OneDrive handles server sync.

<h2 id="menu-bar">Quick Access from the Menu Bar</h2>

Open a summary of today’s events and reminders from the monochrome Sisyphus icon. You can show or hide the menu bar icon in Settings. [Tuck](../../software/tuck/) is a separate utility for organizing menu bar icons.

<h2 id="name">Why Sisyphus Almanac?</h2>

An almanac brings dates, information, and records together. Sisyphus is the figure who pushes a boulder uphill, again and again.

When one day ends, another begins with new tasks. But no two days are exactly the same. We make things, learn things, and leave records behind.

I wanted a place to bring those days together.

**Every day, we push the stone again.**

<h2 id="download">Download and Installation</h2>

**1.1.2 · Build 113 · macOS 15.0 or later · Apple silicon and Intel**

[Download · 1.1.2](https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/tag/v1.1.2) · [SHA-256 checksums](https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/download/v1.1.2/SHA256SUMS.txt)

Open the DMG and drag Sisyphus Almanac.app to Applications. This public test build is ad hoc signed and has not been notarized by Apple, so macOS may block it from opening. Calendar, Reminders, Notes, Mail, and file access require the corresponding macOS permissions. The package includes an Intel binary. This check did not include running the app on an Intel Mac.

To verify the download, put the DMG and checksum file in the same folder and run `shasum -a 256 -c SHA256SUMS.txt`.

<h2 id="release-notes">Version 1.1.2 Release Notes</h2>

Released November 18, 2026.

- Added **Open Mail App** to open Apple Mail directly from the Mail screen.
- Upcoming, Calendar, Reminders, Notes, and Obsidian now default to **This Mac**.
- Data source selections are remembered across launches.
- Includes the DMG installation window spacing improvements introduced in 1.1.1.

[GitHub release](https://github.com/JovarisAudio/SisyphusAlmanac-Releases/releases/tag/v1.1.2)

### Previous version · 1.1.1

Adjusted the spacing between the app icon, arrow, and Applications folder in the DMG installation window.

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
<summary>User Manual</summary>

The application requires macOS 15.0 or later. Open the distribution DMG and drag **Sisyphus Almanac.app** to **Applications**. The accompanying reports give the signing and installation status of this package. The application interface uses Korean labels.

- **Today (오늘).** Choose **샘플** for sample data or **이 Mac** for local calendar and reminders. macOS may ask for permission when you connect a service.
- **Calendar and reminders.** Use **예정** for upcoming items or **캘린더** for the day, week, and month views. Select an event to see details and related items. In a live event, **자료 연결** adds a reminder, an Apple Notes reference, or a mail link.
- **Quick Capture (빠른 입력).** Enter the item and select its destination calendar, reminders list, or Notes folder before saving.
- **Daily Log.** In **빠른 기록**, put a marker at the start of a line followed by a space. Use `*` for tasks, `@` for event drafts, `-` for notes, and `+` for ideas. Prefix a supported entry with `!` for priority. Choose **미리보기**, then **Daily Log에 저장**. Event drafts are local. Use Quick Capture for an Apple Calendar event.
- **Daily Review.** Use `X`, `>`, or `<` and choose a task to complete, move, or schedule it. The **정리** menu offers the same actions and exclusion. **회고 저장** saves the daily reflection. **실행 취소** reverses the last local change.
- **Notes and Obsidian.** Open **메모** to browse Apple Notes. In **Obsidian**, choose a vault folder to browse Markdown and use **Obsidian 열기** to open the source application.
- **Mail.** In **받은 편지함**, choose **모든 계정 연결** once and respond to the macOS automation prompt if shown. Filter by account and use **새로고침** to refresh. The inbox displays up to 12 messages per active Apple Mail account, and Today shows three. **연결한 메일** shows references saved with events or reminders. **Apple Mail에서 원본 열기** opens the source.
- **Finance.** Choose **가계부 선택** and select your Excel workbook. For OneDrive, choose the file in your synced Finder folder. **Excel에서 원본 열기** opens it in Excel. Use **연결 확인** or **다시 선택** if the reference needs attention.
- **Menu bar.** Click the Sisyphus symbol for Today’s summary. Use **메뉴바에 Sisyphus Almanac 표시** in Settings to control visibility. Tuck is a separate product and is optional.

</details>

<details id="development-journal">
<summary>Development Journal · The Stones We Push Every Day</summary>

This journal entry dates to private testing of 1.1.0. Version 1.1.2 is the current public test build.

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
