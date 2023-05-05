import styles from '../Components/InputTask.module.css';
import { PlusCircle } from "phosphor-react";

export function InputTask() {
  return (
    <div>
      <div className={styles.inputTask}>
        <input type="text" placeholder='Adicionar uma nova tarefa' />

        <button placeholder='Criar' type="submit" >Criar
          <PlusCircle size={16} className={styles.icon} />
        </button>
      </div>

      <div className={styles.taskCount}>
        <span className={styles.counter}>Tarefas criadas: 0</span>
        <span className={styles.counter}>Tarefas concluídas: 0</span>
      </div>
    </div>
  )
}
