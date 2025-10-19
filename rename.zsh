# state 是一个状态变量，用于在 rename 命令中保持状态
rename 'state $i = 1; s/.*/sprintf("海山摆渡车_%d.JPG", $i++)/e' *.JPG