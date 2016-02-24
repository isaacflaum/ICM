# ICM
index.js is an ICM calculator for 6max poker games in which 2 places are paid.
I use the MH algorithm which first assumes fair play to calculate respective probabilities of 
coming in first which is simply the ratio of each player's chips to the total (fair play)
and then use those probabilities as weights to calculate the probabilities for each player
coming in second place. We can calculate second place by realizing that second place can be thought
of as winning an exclusive (fair) tournament amongst the remaining players who did not win first.
Each player's probability of coming in second place is the summation of the probabilities that
that player wins an exclusive tournament (without the 1st place player) for each opponent coming
in first place, weighging for percentage each opponent comes in first respectively. (we have these values
from before) Each player's equity is then calculated using EV formula
EQUITY = `(percentage of time getting 1st) * (1st place prize) + (percentage of time getting 2nd) * (2nd place prize)`

