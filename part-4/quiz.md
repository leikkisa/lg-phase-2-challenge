When you run a command in the terminal, where does BASH look for that command?

BASH looks for the command in a variety of places in a certain loading order:
1. First it searches ALIASES
2. If the command contains slashes, it executes in a separate environment
3. If it doesn't contain slashes, it checks the function list to see if it's a function
4. If it's not a function, then it will check for it in the built-in list
5. If it's not a function or in the built-in list, it will look for directories in the PATH variable, which stores full path names of executables in a hash table
6. If it can't find the command in the Path Hash tables, it can do an extensive Path search
7. If it's not found it will throw an error
8. It might not be an actual BASH command but can be run instead as a shell script if it's a file
----------------
On a UNIX computer, how do you stop a running process?

First you need to know the process ID (PID) of the process you want to stop.  You can run the "top" command to find these, or "ps" will show terminal processes.

Then you can type "kill" followed by the pid of the process you want to kill
----------------
What packages do you have installed via homebrew?

I found these by typing "brew list" in the terminal:
autoconf	icu4c		libyaml		pkg-config	zsh
automake	libgpg-error	node		postgresql
coreutils	libksba		openssl		readline
gdbm		libtool		pcre		ruby-build
----------------
On a UNIX computer, how do you find the process id of a running process?

You can type "top" in the terminal which will also show sleeping processes, or ps which shows terminal processes.
----------------
In a terminal, what does control-c do?

CTRL+C will end the currently running terminal process, which is good if it gets stuck, or if you need to stop a continuously running process like a server.
----------------
In a terminal, what does control-a do?

CTRL+A will move the typing cursor to the beginning of the line.
----------------
In a terminal, what does control-e do?

CTRL+E will move the typing cursor to the end of the line.
----------------
What keyboard shortcut do you use to split the screen in your editor?

In Atom, first type CMD + K, then type an arrow key to indicate which direction to split the screen to.
----------------
What keyboard shortcut do you use to split the screen in your terminal?

In the Terminal (I use iTerm), CMD+D splits vertically, and CMD+SHIFT+D splits horizontally.
----------------
When a terminal command completes, how can you tell if it was successful or not?

There is a return variable stored in an exit status at $?, 0 indicates success, any other value indicates an error.
----------------
What does your ~/.gitconfig have in it? (paste the whole file here)

# This is Git's per-user configuration file.
[user]
# Please adapt and uncomment the following lines:
#	name = Sally Maki
	email = sallymaki@gmail.com
	name = leikkisa
----------------
What is the difference between a relative and absolute path?

A relative path is relative to your current position (or the position of the file using a relative path).  An absolute path specifies the whole path and will point to the same destination no matter which location you are at.
----------------
Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?

cd ../pinterest-for-dogs
----------------
What keyboard shortcut do you use, in your editor, when you want to open a specific file?

CMD+O will open the "open file" dialog box and let you pick a file.
----------------
What files or folders do you want all git repositories to ignore?

Logs, runtime data, dependency directories like node_modules, cached files, dotenv files, and there may be some specific folders/files depending on what tools/packages are in use.
----------------
What is the main difference between == and === in JavaScript?

=== is a strict comparison, meaning the two values need to have the same type and same values.  NaN is not equal to anything (including NaN).  They must also refer to the same object.  Null and Undefined are not strictly equivalent.

== is less strict and things can have different types or be "equivalent" values.  So 0==false is true, while 0===false is false.  1=="1" is true, but 1==="1" is false.  null == undefined is true, but null === undefined is false.  Also two objects that appear the same but refer to different objects would be equal with == but not with ===.
