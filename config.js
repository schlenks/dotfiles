module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    "ack",
    "ag",
    "asdf",
    "bash-completion",
    // Install GNU core utilities (those that come with macOS are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    "coreutils",
    "dos2unix",
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    "findutils",
    // 'fortune',
    "readline", // ensure gawk gets good readline
    "gawk",
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    //'gifsicle',
    // Good-lookin' diffs for git - https://github.com/so-fancy/diff-so-fancy
    "diff-so-fancy",
    "gnupg",
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    "gnu-sed --with-default-names",
    // better, more recent grep
    "homebrew/dupes/grep",
    // https://github.com/jkbrzt/httpie
    "httpie",
    "hub",
    "htop",
    // jq is a sort of JSON grep
    "jq",
    "jump",
    // Mac App Store CLI: https://github.com/mas-cli/mas
    "mas",
    // Install some other useful utilities like `sponge`
    "moreutils",
    "nmap",
    "openconnect",
    "reattach-to-user-namespace",
    // better/more recent version of screen
    "homebrew/dupes/screen",
    "tmux",
    "todo-txt",
    "tree",
    "ttyrec",
    // better, more recent vim
    "vim --with-override-system-vi",
    "watch",
    // Install wget with IRI support
    "wget --enable-iri"
  ],
  cask: [
    //'adium',
    //'amazon-cloud-drive',
    //'atom',
    // 'box-sync',
    //'comicbooklover',
    //'diffmerge',
    "betterzip",
    "BetterZipQL",
    "cleanmymac",
    "docker", // docker for mac
    "dropbox",
    //'evernote',
    "encryptme",
    "firefox",
    "flux",
    "github",
    "google-chrome",
    "gpg-suite",
    //'ireadfast',
    "insomnia",
    "iterm2",
    "lastpass",
    //'little-snitch',
    //'macbreakz',
    //'micro-snitch',
    "opera",
    "psequel",
    //'signal',
    //'macvim',
    "qlcolorcode",
    "qlstephen",
    "qlmarkdown",
    "quicklook-json",
    "qlimagesize",
    "qlvideo",
    "spectacle",
    //'sketchup',
    "slack",
    "suspicious-package",
    "the-unarchiver",
    //'torbrowser',
    "transmission",
    "visual-studio-code",
    "vlc",
    "webpquicklook",
    "xquartz"
  ],
  gem: [],
  npm: [
    "antic",
    "buzzphrase",
    "eslint",
    "instant-markdown-d",
    // 'generator-dockerize',
    // 'gulp',
    "npm-check-updates",
    "prettyjson",
    "trash",
    "vtop"
    // ,'yo'
  ],
  mas: [
    // spark mail app
    1176895641,
    // wunderlist
    410628904
  ]
};
