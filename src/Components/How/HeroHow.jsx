export default function HeroHow() {
  return (
    <div className="flex flex-col gap-4 bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-4xl max-h-[calc(100vh-200px)] overflow-y-auto">
      <h2 className="text-center">How To Play</h2>
      <p className="">
        Vampire Village is a version of the classic game "Werewolf," where
        players are divided into two main groups: villagers and vampires. The
        goal of the game is for the villagers to identify and eliminate the
        vampires, while the vampires aim to outnumber the villagers by
        eliminating them one by one. Here's how to play the game:
      </p>
      <h3>Player Roles:</h3>
      <p className="">
        1. Villagers: The villagers' objective is to figure out who the vampires
        are and vote to eliminate them during the day. Villagers do not know who
        the vampires are and must use discussion and deduction to find them.
      </p>
      <p className="">
        2. Vampires: The vampires know each other and secretly choose a villager
        to eliminate each night. Their goal is to deceive the villagers and
        survive until they outnumber them.
      </p>
      <p className="">
        3. Special Roles: In addition to villagers and vampires, there are
        usually special roles that add complexity to the game, such as:
      </p>
      <ul className="list-disc pl-8">
        <li>
          Hunter: If the Hunter is killed, they can take one other player down
          with them.
        </li>
        <li>
          Doctor: The Doctor can choose one player each night to protect from
          the vampires.
        </li>
        <li>Seer: The Seer can learn the role of one player each night.</li>
      </ul>
      <h3>Game Flow:</h3>
      <p className="">
        1. Night Phase: The game starts with a night phase. All players close
        their eyes. The moderator wakes up the vampires to let them choose a
        victim. Then, the moderator wakes up the special roles (like the Doctor
        and Seer) to perform their actions.
      </p>
      <p className="">
        2. Day Phase: During the day, all players open their eyes. The moderator
        announces who, if anyone, was eliminated during the night. The remaining
        players discuss who they think the vampires are and then vote to
        eliminate one player. The player with the most votes is eliminated and
        reveals their role.
      </p>
      <p className="">
        Voting: After discussions, a vote is held to decide which player to
        eliminate. The player who receives the most votes is eliminated from the
        game and reveals whether they were a villager or a vampire.
      </p>
      <p className="">
        Endgame: The game continues in alternating night and day phases until
        one of the following conditions is met:
      </p>
      <ul className="list-disc pl-8">
        <li>
          The villagers eliminate all the vampires, in which case the villagers
          win
        </li>
        <li>
          The vampires outnumber the villagers, in which case the vampires win.
        </li>
      </ul>
      <h3>Tips</h3>
      <ul className="list-disc pl-8">
        <li>
          Vampires: Vampires should try to blend in with the villagers and avoid
          drawing suspicion. They must carefully choose their targets and use
          deception to survive.
        </li>
        <li>
          Villagers: Villagers need to pay attention to inconsistencies in
          behavior and work together to identify the vampires. They should be
          cautious but also decisive when voting.
        </li>
        <li>
          pecial Roles: The special roles can be game-changers. Players with
          special roles should use their abilities wisely and strategically to
          influence the outcome.
        </li>
      </ul>
      <p className="">
        Vampire Village is a fun and engaging game that requires strategy,
        communication, and a bit of deception. It’s great for playing with
        friends in a group setting.
      </p>
    </div>
  );
}
