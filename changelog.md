Version 1.0.0 - 2026-05-03

Added:

Custom event system: data-driven events defined in config.yml under custom-events
13 configurable action types: message, sound, potion, teleport, spawn-mob, strike-lightning, spawn-tnt, velocity, ignite, economy-reward, title, console-command, player-command
9 configurable event metadata fields: name, chance, duration, icon, min-players, allowed-worlds, start-message, end-message, bossbar-title
6 new action fields: target-count, chance, fade-in-ticks, stay-ticks, fade-out-ticks, command
5 preset events included: meteor-shower, gravity-well, hot-potato, jackpot-rush, blink-surge
Startup/reload validation for custom events
CUSTOM_EVENTS.md reference documentation
GUI now shows event duration and min-players

Changed:

Event registration reloads built-in and custom events together
Event icons resolved via shared event contract (built-in and custom use same UI flow)
Queue, announcements, bossbar, placeholders, GUI chance editing work with custom events
GUI queue: added middle-click, Q, and Ctrl+Q shortcuts
Config presets updated with examples of all new features

Added:

Data-driven custom event system under custom-events in config.yml
Configurable event metadata: name chance duration icon min-players allowed-worlds start-message end-message bossbar-title
Configurable action pipeline with delayed, repeating, targeted, and chance-gated actions
11 custom action types: message sound potion teleport spawn-mob strike-lightning spawn-tnt velocity ignite economy-reward title console-command player-command
New action fields: target-count chance fade-in-ticks stay-ticks fade-out-ticks command
Five preset v1.0 events: meteor-shower gravity-well hot-potato jackpot-rush blink-surge
Validation for custom events on startup and reload
Full custom event reference in CUSTOM_EVENTS.md
Extra GUI details: duration and minimum players for configured events

Changed:

Event registration now reloads built-in and custom events together
Event menu icons resolved through the event contract — built-in and custom events share the same UI flow
Queue, random selection, announcements, bossbar, placeholders, and GUI chance editing now work with custom events as first-class entries
GUI queue input now supports middle click, Q, and Ctrl+Q for adding events to the queue
Shipped config presets demonstrate titles, command actions, per-action chance, custom messages, custom bossbar text, and multi-target random selection

