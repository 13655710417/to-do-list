// 封神金句语库
const inspirations = [
    "不为盛名而来，不为低谷而去。",
    "我无比想念以前的自己，可现在是通往未来的唯一路径",
    "追风赶月莫停留，平芜尽处是春山。",
    "无关紧要的铺垫只会淹没重点，所以做出取舍很重要。",
    "最重要的还是了解自己，让自己活的自洽。",
    "如此年轻的我，想要改变世界。",
    "读书的本质，是帮你更好地认识这个世界，然后更好地认识自己",
    "我将继续追寻，就算这无尽的星辰令我希望渺茫，就算我必须单枪匹马。",
    "永远不会放弃追求个性与自由，永远不会迷信权威，这是独立行走于天地之间的风骨。",
    "放肆地去热爱生活的同时，也更加热爱自己",
    "追风赶月莫停留，平芜尽处是春山。",
    "我们总以为路很多，可是回望过去，其实路只有一条",
    "在最好的年纪对错成败的选择题，没有标准答案拥抱自己",
    "不要成为无聊的大人，要做特立独行的孩子",
    "眼里有光，便有希望，我们可以一直走下去！",
    "浪漫是在这个不断改变的时代，始终不变的坚守。",
    "The road of life is long, and the future is as brilliant as the stars and the sea.",
    "成长先是冲击，然后是成熟，最后是成熟加稳定。"
];

// 休息提醒语句库
const restReminders = [
    "记得站起来活动一下，放松身体～",
    "休息一下眼睛，看看远方吧～",
    "喝点水，活动一下筋骨～",
    "站起来走走，让身体放松一下～",
    "眼睛累了，看看窗外休息一下吧～",
    "活动一下，保持好状态～",
    "站起来伸展一下，放松身心～",
    "休息片刻，让眼睛和身体都放松～",
    "起来走动一下，保持活力～",
    "放松一下，做个深呼吸～",
    "站起来活动活动，保持好心情～",
    "休息一下，让眼睛得到放松～",
    "起来走走，活动一下身体～",
    "放松片刻，保持专注力～",
    "站起来伸展，让身体更舒适～"
];

// 番茄钟科学休息方法 - 短休息（5分钟）
const shortBreakMethods = [
    {
        title: "👀 20-20-20护眼法",
        description: "看20英尺（约6米）外的物体20秒，缓解眼睛疲劳。可以看看窗外的绿植或远处的建筑。"
    },
    {
        title: "💧 补水时间",
        description: "喝一杯水，补充水分。轻度脱水会影响注意力和认知功能。"
    },
    {
        title: "🧘‍♂️ 深呼吸放松",
        description: "做3-5次深呼吸：吸气4秒，屏气2秒，呼气6秒。帮助降低压力水平。"
    },
    {
        title: "🦵 腿部活动",
        description: "站起来活动腿部，原地踏步或轻微屈膝，促进血液循环。"
    },
    {
        title: "👐 手部伸展",
        description: "伸展手指和手腕，缓解长时间使用鼠标键盘的紧张。"
    },
    {
        title: "😊 微笑放松",
        description: "给自己一个微笑，放松面部肌肉。微笑能释放内啡肽，提升情绪。"
    },
    {
        title: "🔄 颈部放松",
        description: "缓慢转动头部，左右各转3圈，缓解颈部紧张。"
    },
    {
        title: "🌿 绿色视野",
        description: "如果有绿植，看看绿色植物；没有的话可以想象一片森林，帮助放松眼睛。"
    }
];

// 番茄钟科学休息方法 - 长休息（15分钟）
const longBreakMethods = [
    {
        title: "🚶‍♀️ 轻度活动",
        description: "在室内走动5分钟，或者做简单的伸展运动，促进全身血液循环。"
    },
    {
        title: "🍎 健康零食",
        description: "吃一点水果或坚果，补充能量。避免高糖食物导致能量骤降。"
    },
    {
        title: "🧘‍♀️ 简短冥想",
        description: "闭眼静坐3分钟，专注于呼吸，清空思绪，恢复注意力。"
    },
    {
        title: "📖 轻松阅读",
        description: "阅读与工作无关的轻松内容，如杂志、短篇文章，转换思维模式。"
    },
    {
        title: "🎵 音乐放松",
        description: "听一首轻松的音乐，最好是纯音乐或自然声音，帮助大脑放松。"
    },
    {
        title: "💆‍♂️ 自我按摩",
        description: "按摩太阳穴、颈部或手掌，缓解肌肉紧张和疲劳。"
    },
    {
        title: "🌄 远眺放松",
        description: "如果可能，到窗边远眺，观察远处的景物，放松眼睛和心灵。"
    },
    {
        title: "✍️ 自由书写",
        description: "花几分钟写下刚才工作的感想或接下来的计划，整理思绪。"
    },
    {
        title: "🧹 整理环境",
        description: "整理一下工作台面，简单的整理活动能带来秩序感和成就感。"
    },
    {
        title: "🤸‍♀️ 全身伸展",
        description: "做一套完整的伸展运动：手臂上举、侧弯、转体、腿部伸展。"
    }
];

// 获取科学休息方法
function getBreakMethod(mode) {
    let methodArray, methodIndex;

    if (mode === 'short_break') {
        methodArray = shortBreakMethods;
        methodIndex = breakMethodIndices.short_break;
        // 递增索引，循环使用
        breakMethodIndices.short_break = (breakMethodIndices.short_break + 1) % methodArray.length;
    } else if (mode === 'long_break') {
        methodArray = longBreakMethods;
        methodIndex = breakMethodIndices.long_break;
        // 递增索引，循环使用
        breakMethodIndices.long_break = (breakMethodIndices.long_break + 1) % methodArray.length;
    } else {
        return null;
    }

    return methodArray[methodIndex];
}

// 全局变量
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';
let timerInterval = null;
let timerSeconds = 0;
let isTimerRunning = false;
let isCountdown = true;
let timerDuration = 25 * 60; // 默认25分钟
let customInspiration = localStorage.getItem('customInspiration') || '';
let calendarLabels = {};
let isEditLabelMode = false;

// DOM元素
const calendarGrid = document.getElementById('calendar-grid');
const currentMonthElement = document.getElementById('current-month');
const restReminderElement = document.getElementById('rest-reminder');
const timerDisplay = document.getElementById('timer-display');
const startTimerBtn = document.getElementById('start-timer');
const pauseTimerBtn = document.getElementById('pause-timer');
const resetTimerBtn = document.getElementById('reset-timer');
const durationSlider = document.getElementById('duration-slider');
const durationValue = document.getElementById('duration-value');
const timerModeRadios = document.querySelectorAll('input[name="timer-mode"]');
const inspirationText = document.getElementById('inspiration-text');
const newInspirationBtn = document.getElementById('new-inspiration');
const customInspirationBtn = document.getElementById('custom-inspiration');
const customModal = document.getElementById('custom-modal');
const customTextarea = document.getElementById('custom-text');
const saveCustomBtn = document.getElementById('save-custom');
const cancelCustomBtn = document.getElementById('cancel-custom');
const newTaskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const priorityButtons = document.querySelectorAll('.priority-btn');
const tasksContainer = document.getElementById('tasks-container');
const totalTasksElement = document.getElementById('total-tasks');
const completedTasksElement = document.getElementById('completed-tasks');
const tasksTitle = document.getElementById('tasks-title');
const filterButtons = document.querySelectorAll('.filter-btn');
const startTimeInput = document.getElementById('start-time');
const endTimeInput = document.getElementById('end-time');
const goalText = document.getElementById('goal-text');
const addGoalBtn = document.getElementById('add-goal-btn');
const goalsContainer = document.getElementById('goals-container');

// 专注统计DOM元素
const statsTodayTotalElement = document.getElementById('stats-today-total');
const statsTodayPomodoroElement = document.getElementById('stats-today-pomodoro');
const statsTodayCountupElement = document.getElementById('stats-today-countup');
const statsTodayCountdownElement = document.getElementById('stats-today-countdown');
const statsMonthTotalElement = document.getElementById('stats-month-total');
const statsMonthDaysElement = document.getElementById('stats-month-days');
const statsMonthAverageElement = document.getElementById('stats-month-average');
const statsLongestDayElement = document.getElementById('stats-longest-day');
const statsLongestDateElement = document.getElementById('stats-longest-date');
const statsAverageDayElement = document.getElementById('stats-average-day');
const statsTotalDaysElement = document.getElementById('stats-total-days');
const resetTodayStatsBtn = document.getElementById('reset-today-stats-btn');
const exportStatsBtn = document.getElementById('export-stats-btn');
const closeStatsBtn = document.getElementById('close-stats-btn');
const focusStatsBtn = document.getElementById('focus-stats-btn');
const closeFocusStatsBtn = document.getElementById('close-focus-stats');

// 全局变量 - 目标列表
let goals = JSON.parse(localStorage.getItem('goals')) || [];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
    initTimer();
    initInspiration();
    initTasks();
    initGoals();
    initTips();
    initToolbar();
    initQuickNote();
    initPomodoro();
    initFocusStats();
    initDictionary();
    initEventListeners();
    updateTaskStats();
    renderTasks();
});

// 初始化日历
function initCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    // 设置月份标题
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月',
                       '七月', '八月', '九月', '十月', '十一月', '十二月'];
    currentMonthElement.textContent = `${monthNames[month]} ${year}`;

    // 加载当前月的标签数据
    const storageKey = `calendarLabels_${year}_${month + 1}`;
    calendarLabels = JSON.parse(localStorage.getItem(storageKey)) || {};

    // 获取当月第一天和最后一天
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const firstDayIndex = firstDay.getDay(); // 0 = 周日, 1 = 周一, ...

    // 清空日历网格
    calendarGrid.innerHTML = '';

    // 添加星期标题（调整为周一至周日）
    const dayNames = ['一', '二', '三', '四', '五', '六', '日'];
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });

    // 计算起始偏移量（日历从周一开始）
    // 如果第一天是周日(0)，放在第7列（偏移6格）
    // 如果第一天是周一(1)，放在第1列（偏移0格）
    // 如果第一天是周二(2)，放在第2列（偏移1格）...以此类推
    let startOffset;
    if (firstDayIndex === 0) {
        startOffset = 6; // 周日放在最后一列
    } else {
        startOffset = firstDayIndex - 1; // 周一=0, 周二=1, ...
    }

    // 添加空白单元格作为偏移
    for (let i = 0; i < startOffset; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'day-cell empty';
        calendarGrid.appendChild(emptyCell);
    }

    // 添加当月日期
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        dayCell.dataset.day = day; // 保存日期号

        // 创建日期数字显示
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = day;

        // 创建标签显示区域
        const dayLabel = document.createElement('div');
        dayLabel.className = 'day-label';
        const labelText = calendarLabels[day] || '';
        dayLabel.textContent = labelText;
        dayLabel.title = labelText; // 鼠标悬停显示完整标签

        // 如果有关联的标签，添加标签指示器类
        if (labelText) {
            dayCell.classList.add('has-label');
        }

        dayCell.appendChild(dayNumber);
        dayCell.appendChild(dayLabel);

        if (day === today) {
            dayCell.classList.add('today');
        }

        // 添加点击事件 - 切换选中状态
        dayCell.addEventListener('click', (e) => {
            // 阻止事件冒泡，避免冲突
            e.stopPropagation();
            document.querySelectorAll('.day-cell').forEach(cell => {
                cell.classList.remove('selected');
            });
            dayCell.classList.add('selected');
        });

        // 添加双击事件 - 编辑标签
        dayCell.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            e.preventDefault();
            editDayLabel(day, year, month);
        });

        calendarGrid.appendChild(dayCell);
    }

    // 不添加空白单元格，让网格自然高度
    // 这样不同月份日历高度可能不同，但更紧凑

    // 显示休息提醒
    showRestReminder();
}

// 编辑日期标签
function editDayLabel(day, year, month) {
    // 获取当前标签
    const currentLabel = calendarLabels[day] || '';

    // 使用prompt让用户输入新标签
    const newLabel = prompt(`为 ${year}年${month + 1}月${day}日 添加标签：`, currentLabel);

    // 如果用户取消，返回
    if (newLabel === null) return;

    // 更新标签数据
    if (newLabel.trim() === '') {
        // 如果输入为空，删除标签
        delete calendarLabels[day];
    } else {
        calendarLabels[day] = newLabel.trim();
    }

    // 保存到本地存储
    const storageKey = `calendarLabels_${year}_${month + 1}`;
    localStorage.setItem(storageKey, JSON.stringify(calendarLabels));

    // 更新日历显示
    updateCalendarLabels();
}

// 更新日历标签显示
function updateCalendarLabels() {
    const dayCells = document.querySelectorAll('.day-cell');
    dayCells.forEach(cell => {
        if (cell.dataset.day) {
            const day = parseInt(cell.dataset.day);
            const labelText = calendarLabels[day] || '';
            const labelElement = cell.querySelector('.day-label');

            if (labelElement) {
                labelElement.textContent = labelText;
                labelElement.title = labelText;

                // 更新单元格的has-label类
                if (labelText) {
                    cell.classList.add('has-label');
                } else {
                    cell.classList.remove('has-label');
                }
            }
        }
    });
}

// 显示休息提醒
function showRestReminder() {
    if (!restReminderElement) return;

    // 随机选择一条休息提醒
    const randomIndex = Math.floor(Math.random() * restReminders.length);
    const reminder = restReminders[randomIndex];

    // 更新元素内容
    restReminderElement.textContent = reminder;

    // 可选：添加点击事件来切换提醒
    restReminderElement.addEventListener('click', () => {
        const newIndex = (randomIndex + 1) % restReminders.length;
        restReminderElement.textContent = restReminders[newIndex];
    });
}

// 初始化计时器
function initTimer() {
    updateTimerDisplay();
    durationSlider.value = 25;
    updateDurationValue();

    // 计时器模式切换
    timerModeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            isCountdown = e.target.value === 'countdown';
            if (isCountdown) {
                timerSeconds = timerDuration;
            } else {
                timerSeconds = 0;
            }
            updateTimerDisplay();
        });
    });

    // 时长滑块
    durationSlider.addEventListener('input', () => {
        updateDurationValue();
        timerDuration = parseInt(durationSlider.value) * 60;
        if (isCountdown && !isTimerRunning) {
            timerSeconds = timerDuration;
            updateTimerDisplay();
        }
    });
}

// 更新时长显示
function updateDurationValue() {
    const minutes = durationSlider.value;
    durationValue.textContent = `${minutes} 分钟`;
}

// 更新计时器显示
function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;

    timerDisplay.textContent =
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}`;
}

// 开始计时器
function startTimer() {
    if (isTimerRunning) return;

    isTimerRunning = true;
    startTimerBtn.disabled = true;
    pauseTimerBtn.disabled = false;

    timerInterval = setInterval(() => {
        if (isCountdown) {
            if (timerSeconds > 0) {
                timerSeconds--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                isTimerRunning = false;
                startTimerBtn.disabled = false;

                // 记录倒计时专注时间
                const countdownMinutes = timerDuration / 60;
                addFocusTime(countdownMinutes, 'countdown');

                alert('计时结束！');
            }
        } else {
            timerSeconds++;
            updateTimerDisplay();
        }
    }, 1000);
}

// 暂停计时器
function pauseTimer() {
    if (!isTimerRunning) return;

    clearInterval(timerInterval);
    isTimerRunning = false;
    startTimerBtn.disabled = false;
    pauseTimerBtn.disabled = true;

    // 记录正计时的专注时间
    if (!isCountdown && timerSeconds > 0) {
        const countupMinutes = Math.floor(timerSeconds / 60);
        if (countupMinutes > 0) {
            addFocusTime(countupMinutes, 'countup');
        }
    }
}

// 重置计时器
function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    startTimerBtn.disabled = false;
    pauseTimerBtn.disabled = true;

    // 记录正计时的专注时间
    if (!isCountdown && timerSeconds > 0) {
        const countupMinutes = Math.floor(timerSeconds / 60);
        if (countupMinutes > 0) {
            addFocusTime(countupMinutes, 'countup');
        }
    }

    if (isCountdown) {
        timerSeconds = timerDuration;
    } else {
        timerSeconds = 0;
    }
    updateTimerDisplay();
}

// 初始化励志语
function initInspiration() {
    // 加载自定义励志语
    if (customInspiration) {
        inspirationText.textContent = customInspiration;
    } else {
        getRandomInspiration();
    }
}

// 获取随机励志语
function getRandomInspiration() {
    const randomIndex = Math.floor(Math.random() * inspirations.length);
    inspirationText.textContent = inspirations[randomIndex];
}

// 显示自定义模态框
function showCustomModal() {
    customModal.classList.add('active');
    customTextarea.value = customInspiration || '';
    customTextarea.focus();
}

// 保存自定义励志语
function saveCustomInspiration() {
    const text = customTextarea.value.trim();
    if (text) {
        customInspiration = text;
        inspirationText.textContent = text;
        localStorage.setItem('customInspiration', text);
    }
    customModal.classList.remove('active');
}

// 初始化任务系统
function initTasks() {
    // 设置默认优先级
    let currentPriority = 'normal';

    // 优先级按钮点击事件
    priorityButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            priorityButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPriority = btn.dataset.priority;
        });
    });

    // 添加任务事件
    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
}

// 添加新任务
function addTask() {
    const text = newTaskInput.value.trim();
    if (!text) return;

    const activePriorityBtn = document.querySelector('.priority-btn.active');
    const priority = activePriorityBtn.dataset.priority;

    const task = {
        id: Date.now(),
        text: text,
        priority: priority,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.push(task);
    saveTasks();
    newTaskInput.value = '';
    renderTasks();
    updateTaskStats();
}

// 保存任务到本地存储
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 渲染任务列表
function renderTasks() {
    tasksContainer.innerHTML = '';

    // 过滤任务
    let filteredTasks = tasks;
    if (currentFilter !== 'all') {
        if (currentFilter === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        } else {
            filteredTasks = tasks.filter(task => task.priority === currentFilter);
        }
    }

    if (filteredTasks.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <i class="fas fa-clipboard-list"></i>
            <p>${currentFilter === 'completed' ? '没有已完成的任务' : '没有任务'}</p>
        `;
        tasksContainer.appendChild(emptyState);
        return;
    }

    // 按创建时间排序（最新的在前面）
    filteredTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksContainer.appendChild(taskElement);
    });
}

// 创建任务元素
function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
    taskElement.dataset.id = task.id;

    const priorityClass = getPriorityClass(task.priority);
    const priorityText = getPriorityText(task.priority);

    taskElement.innerHTML = `
        <div class="task-checkbox ${task.completed ? 'checked' : ''}"></div>
        <div class="task-content">
            <div class="task-text">${task.text}</div>
            <div class="task-priority ${priorityClass}">${priorityText}</div>
        </div>
        <div class="task-actions">
            <button class="delete-btn" title="删除任务">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `;

    // 添加事件监听器
    const checkbox = taskElement.querySelector('.task-checkbox');
    const deleteBtn = taskElement.querySelector('.delete-btn');

    checkbox.addEventListener('click', () => toggleTaskCompletion(task.id));
    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    return taskElement;
}

// 获取优先级类名
function getPriorityClass(priority) {
    switch(priority) {
        case 'urgent': return 'urgent';
        case 'important': return 'important';
        case 'challenge': return 'challenge';
        case 'normal': return 'normal';
        default: return 'normal';
    }
}

// 获取优先级文本
function getPriorityText(priority) {
    switch(priority) {
        case 'urgent': return '紧急';
        case 'important': return '重要';
        case 'challenge': return '挑战';
        case 'normal': return '普通';
        default: return '普通';
    }
}

// 切换任务完成状态
function toggleTaskCompletion(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasks();
        renderTasks();
        updateTaskStats();
    }
}

// 删除任务
function deleteTask(taskId) {
    if (confirm('确定要删除这个任务吗？')) {
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasks();
        renderTasks();
        updateTaskStats();
    }
}

// 更新任务统计
function updateTaskStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;

    totalTasksElement.textContent = `${total} 个任务`;
    completedTasksElement.textContent = `${completed} 已完成`;

    // 根据任务完成进度更新标题文字
    let titleText = '';

    if (total === 0) {
        titleText = '🎯 任务清单 · 开始你的第一个任务吧！';
    } else if (completed === 0) {
        titleText = '🚀 任务清单 · 迈出第一步就是成功！';
    } else if (completed === total) {
        titleText = '🎉 任务清单 · 太棒了！全部完成！';
    } else if (completed > total * 0.5) {
        titleText = '🌟 任务清单 · 完成大半了，继续加油！';
    } else {
        titleText = '💪 任务清单 · 完成一小半了，坚持下去！';
    }

    // 更新标题文字
    tasksTitle.innerHTML = `<i class="fas fa-tasks"></i> ${titleText}`;
}

// 初始化事件监听器
function initEventListeners() {
    // 主题切换
    const themeToggle = document.getElementById('theme-toggle');
    const themeSwitcher = document.querySelector('.theme-switcher');
    const themeOptions = document.querySelectorAll('.theme-option');
    const savedTheme = localStorage.getItem('theme') || 'default';

    // 应用保存的主题
    document.body.classList.remove('theme-default', 'theme-green', 'theme-pink', 'theme-blue', 'theme-eye-care');
    document.body.classList.add(`theme-${savedTheme}`);

    // 主题切换按钮点击事件 - 展开/收起选项
    if (themeToggle && themeSwitcher) {
        themeToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            themeSwitcher.classList.toggle('active');
        });

        // 点击主题选项
        themeOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const theme = option.dataset.theme;
                document.body.classList.remove('theme-default', 'theme-green', 'theme-pink', 'theme-blue', 'theme-eye-care');
                document.body.classList.add(`theme-${theme}`);
                localStorage.setItem('theme', theme);

                // 选择主题后关闭选项面板
                themeSwitcher.classList.remove('active');
            });
        });

        // 点击页面其他地方关闭主题选项
        document.addEventListener('click', () => {
            themeSwitcher.classList.remove('active');
        });

        // 阻止主题切换器内部的点击事件冒泡
        themeSwitcher.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // 护眼模式开关
    const eyeCareToggle = document.getElementById('eye-care-toggle');
    if (eyeCareToggle) {
        eyeCareToggle.addEventListener('click', () => {
            const isEyeCare = document.body.classList.contains('theme-eye-care');
            if (isEyeCare) {
                // 关闭护眼模式，恢复默认主题
                document.body.classList.remove('theme-eye-care');
                document.body.classList.add('theme-default');
                localStorage.setItem('theme', 'default');
                eyeCareToggle.innerHTML = '<i class="fas fa-eye"></i> 护眼模式';
            } else {
                // 开启护眼模式
                document.body.classList.remove('theme-default', 'theme-green', 'theme-pink', 'theme-blue');
                document.body.classList.add('theme-eye-care');
                localStorage.setItem('theme', 'eye-care');
                eyeCareToggle.innerHTML = '<i class="fas fa-eye-slash"></i> 关闭护眼';
            }
        });

        // 初始化护眼模式按钮状态
        if (savedTheme === 'eye-care') {
            eyeCareToggle.innerHTML = '<i class="fas fa-eye-slash"></i> 关闭护眼';
        }
    }

    // 计时器按钮
    startTimerBtn.addEventListener('click', startTimer);
    pauseTimerBtn.addEventListener('click', pauseTimer);
    resetTimerBtn.addEventListener('click', resetTimer);

    // 励志语按钮
    newInspirationBtn.addEventListener('click', getRandomInspiration);
    customInspirationBtn.addEventListener('click', showCustomModal);

    // 自定义励志语模态框
    saveCustomBtn.addEventListener('click', saveCustomInspiration);
    cancelCustomBtn.addEventListener('click', () => {
        customModal.classList.remove('active');
    });

    // 点击模态框外部关闭
    customModal.addEventListener('click', (e) => {
        if (e.target === customModal) {
            customModal.classList.remove('active');
        }
    });

    // 过滤器按钮
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderTasks();
        });
    });

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + N: 新任务
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            newTaskInput.focus();
        }

        // Ctrl/Cmd + Enter: 添加任务
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            addTask();
        }

        // Esc: 关闭模态框
        if (e.key === 'Escape' && customModal.classList.contains('active')) {
            customModal.classList.remove('active');
        }
    });

    // 初始化专注统计事件监听器
    initFocusStatsEventListeners();

    // 目标添加按钮事件
    if (addGoalBtn) {
        addGoalBtn.addEventListener('click', addGoal);
    }

    // 目标输入框回车事件
    if (goalText) {
        goalText.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                addGoal();
            }
        });
    }
}

// 初始化目标
function initGoals() {
    renderGoals();
}

// 添加目标
function addGoal() {
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;
    const text = goalText.value.trim();

    if (!startTime || !endTime) {
        alert('请填写开始时间和结束时间');
        return;
    }

    if (!text) {
        alert('请填写目标内容');
        return;
    }

    // 验证时间格式
    const start = parseTime(startTime);
    const end = parseTime(endTime);

    if (!start || !end) {
        alert('时间格式不正确，请使用HH:MM格式');
        return;
    }

    if (end <= start) {
        alert('结束时间必须晚于开始时间');
        return;
    }

    const goal = {
        id: Date.now(),
        startTime: startTime,
        endTime: endTime,
        text: text,
        createdAt: new Date().toISOString()
    };

    goals.push(goal);
    saveGoals();
    goalText.value = '';
    renderGoals();
}

// 解析时间字符串 (HH:MM)
function parseTime(timeStr) {
    const match = timeStr.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return null;

    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return null;
    }

    return hours * 60 + minutes; // 转换为分钟数
}

// 格式化时间显示
function formatTimeDisplay(timeStr) {
    return timeStr;
}

// 保存目标到本地存储
function saveGoals() {
    localStorage.setItem('goals', JSON.stringify(goals));
}

// 渲染目标列表
function renderGoals() {
    if (!goalsContainer) return;

    goalsContainer.innerHTML = '';

    if (goals.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-goals';
        emptyState.innerHTML = `
            <i class="fas fa-bullseye"></i>
            <p>还没有设定目标</p>
        `;
        goalsContainer.appendChild(emptyState);
        return;
    }

    // 按开始时间排序
    goals.sort((a, b) => {
        const timeA = parseTime(a.startTime);
        const timeB = parseTime(b.startTime);
        return timeA - timeB;
    });

    goals.forEach(goal => {
        const goalElement = createGoalElement(goal);
        goalsContainer.appendChild(goalElement);
    });
}

// 创建目标元素
function createGoalElement(goal) {
    const goalElement = document.createElement('div');
    goalElement.className = 'goal-item';
    goalElement.dataset.id = goal.id;

    const timeRange = `${formatTimeDisplay(goal.startTime)} - ${formatTimeDisplay(goal.endTime)}`;

    goalElement.innerHTML = `
        <div class="goal-content">
            <div class="goal-time">${timeRange}</div>
            <div class="goal-text">${goal.text}</div>
        </div>
        <button class="delete-goal-btn" title="删除目标">
            <i class="fas fa-trash-alt"></i>
        </button>
    `;

    // 添加事件监听器
    const deleteBtn = goalElement.querySelector('.delete-goal-btn');
    deleteBtn.addEventListener('click', () => deleteGoal(goal.id));

    return goalElement;
}

// 删除目标
function deleteGoal(goalId) {
    if (confirm('确定要删除这个目标吗？')) {
        goals = goals.filter(goal => goal.id !== goalId);
        saveGoals();
        renderGoals();
    }
}

// ==================== 个性化Tips功能 ====================

// DOM元素 - Tips
const personalTipsTextarea = document.getElementById('personal-tips');

// 全局变量 - Tips
let personalTips = localStorage.getItem('personalTips') || '';
let tipsSaveTimeout = null;

// 初始化Tips
function initTips() {
    // 加载保存的Tips
    personalTipsTextarea.value = personalTips;

    // 实时自动保存
    personalTipsTextarea.addEventListener('input', () => {
        // 清除之前的定时器
        if (tipsSaveTimeout) {
            clearTimeout(tipsSaveTimeout);
        }

        // 设置新的定时器（防抖）
        tipsSaveTimeout = setTimeout(() => {
            savePersonalTips();
        }, 1000); // 1秒后自动保存
    });

    // 当用户离开文本框时立即保存
    personalTipsTextarea.addEventListener('blur', () => {
        if (tipsSaveTimeout) {
            clearTimeout(tipsSaveTimeout);
        }
        savePersonalTips();
    });
}

// 保存个性化Tips
function savePersonalTips() {
    personalTips = personalTipsTextarea.value.trim();
    localStorage.setItem('personalTips', personalTips);
}

// 工具栏相关变量
let currentTool = null;
let calculatorState = {
    display: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
};

// 画板相关变量
let drawingCanvas = null;
let drawingContext = null;
let isDrawing = false;
let currentToolType = 'brush';
let currentColor = '#000000';
let lastX = 0;
let lastY = 0;

// 初始化工具栏
function initToolbar() {
    const toolbar = document.getElementById('toolbar');
    const toolbarToggle = document.getElementById('toolbar-toggle');
    const toolButtons = document.querySelectorAll('.tool-btn');
    const canvasToolButtons = document.querySelectorAll('.canvas-tool-btn');
    const colorOptions = document.querySelectorAll('.color-option');
    const utilityButtons = document.querySelectorAll('.utility-btn');

    // 工具栏展开/收起
    toolbarToggle.addEventListener('click', () => {
        toolbar.classList.toggle('expanded');
        toolbarToggle.classList.toggle('expanded');
    });

    // 工具按钮点击事件
    toolButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tool = button.getAttribute('data-tool');
            const toolContent = document.getElementById(`${tool}-tool`);

            // 关闭其他工具
            document.querySelectorAll('.tool-content').forEach(content => {
                content.classList.remove('active');
            });

            // 切换当前工具状态
            if (currentTool === tool) {
                currentTool = null;
                button.classList.remove('active');
            } else {
                currentTool = tool;
                toolButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                toolContent.classList.add('active');

                // 初始化特定工具
                if (tool === 'calculator') {
                    initCalculator();
                } else if (tool === 'drawing') {
                    initDrawingCanvas();
                }
            }
        });
    });

    // 画板工具按钮
    canvasToolButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tool = button.getAttribute('data-tool');

            canvasToolButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (tool === 'clear-canvas') {
                clearCanvas();
                currentToolType = 'brush';
                document.querySelector('[data-tool="brush"]').classList.add('active');
            } else {
                currentToolType = tool;
            }
        });
    });

    // 颜色选择
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            currentColor = option.getAttribute('data-color');
        });
    });

    // 实用工具按钮
    utilityButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tool = button.id;
            showUtilityTool(tool);
        });
    });

    // 初始化计算器按钮事件
    initCalculatorButtons();
}

// 初始化计算器
function initCalculator() {
    calculatorState = {
        display: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null
    };
    updateCalculatorDisplay();
}

// 初始化计算器按钮事件
function initCalculatorButtons() {
    const calcButtons = document.querySelectorAll('.calc-btn');

    calcButtons.forEach(button => {
        button.addEventListener('click', () => {
            const number = button.getAttribute('data-number');
            const action = button.getAttribute('data-action');

            if (number !== null) {
                inputNumber(number);
            } else if (action !== null) {
                handleAction(action);
            }

            updateCalculatorDisplay();
        });
    });
}

// 输入数字
function inputNumber(number) {
    const { display, waitingForSecondOperand } = calculatorState;

    if (waitingForSecondOperand) {
        calculatorState.display = number;
        calculatorState.waitingForSecondOperand = false;
    } else {
        calculatorState.display = display === '0' ? number : display + number;
    }
}

// 处理计算器操作
function handleAction(action) {
    const { display, firstOperand, operator } = calculatorState;
    const inputValue = parseFloat(display);

    switch (action) {
        case 'clear':
            calculatorState = {
                display: '0',
                firstOperand: null,
                waitingForSecondOperand: false,
                operator: null
            };
            break;

        case 'clear-entry':
            calculatorState.display = '0';
            break;

        case 'backspace':
            if (display.length > 1) {
                calculatorState.display = display.slice(0, -1);
            } else {
                calculatorState.display = '0';
            }
            break;

        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            if (firstOperand === null) {
                calculatorState.firstOperand = inputValue;
            } else if (operator) {
                const result = performCalculation();
                calculatorState.display = `${parseFloat(result.toFixed(7))}`;
                calculatorState.firstOperand = result;
            }

            calculatorState.waitingForSecondOperand = true;
            calculatorState.operator = action;
            break;

        case 'sqrt':
            if (inputValue >= 0) {
                calculatorState.display = `${Math.sqrt(inputValue)}`;
            } else {
                calculatorState.display = '错误';
            }
            break;

        case 'decimal':
            if (!display.includes('.')) {
                calculatorState.display = display + '.';
            }
            break;

        case 'equals':
            if (operator && firstOperand !== null) {
                const result = performCalculation();
                calculatorState.display = `${parseFloat(result.toFixed(7))}`;
                calculatorState.firstOperand = null;
                calculatorState.operator = null;
                calculatorState.waitingForSecondOperand = true;
            }
            break;
    }
}

// 执行计算
function performCalculation() {
    const { firstOperand, display, operator } = calculatorState;
    const secondOperand = parseFloat(display);

    switch (operator) {
        case 'add': return firstOperand + secondOperand;
        case 'subtract': return firstOperand - secondOperand;
        case 'multiply': return firstOperand * secondOperand;
        case 'divide': return secondOperand !== 0 ? firstOperand / secondOperand : '错误';
        default: return secondOperand;
    }
}

// 更新计算器显示
function updateCalculatorDisplay() {
    const displayElement = document.getElementById('calc-display');
    displayElement.textContent = calculatorState.display;
}

// 初始化画板
function initDrawingCanvas() {
    drawingCanvas = document.getElementById('drawing-canvas');
    drawingContext = drawingCanvas.getContext('2d');

    // 设置画布样式
    drawingContext.lineWidth = 2;
    drawingContext.lineCap = 'round';
    drawingContext.lineJoin = 'round';

    // 清除画布
    clearCanvas();

    // 添加事件监听器
    drawingCanvas.addEventListener('mousedown', startDrawing);
    drawingCanvas.addEventListener('mousemove', draw);
    drawingCanvas.addEventListener('mouseup', stopDrawing);
    drawingCanvas.addEventListener('mouseout', stopDrawing);

    // 触摸设备支持
    drawingCanvas.addEventListener('touchstart', handleTouchStart);
    drawingCanvas.addEventListener('touchmove', handleTouchMove);
    drawingCanvas.addEventListener('touchend', stopDrawing);
}

// 开始绘画
function startDrawing(e) {
    isDrawing = true;
    const { offsetX, offsetY } = getCoordinates(e);
    [lastX, lastY] = [offsetX, offsetY];
}

// 绘画
function draw(e) {
    if (!isDrawing) return;

    const { offsetX, offsetY } = getCoordinates(e);

    drawingContext.strokeStyle = currentToolType === 'eraser' ? '#FFFFFF' : currentColor;
    drawingContext.lineWidth = currentToolType === 'eraser' ? 10 : 2;

    drawingContext.beginPath();
    drawingContext.moveTo(lastX, lastY);
    drawingContext.lineTo(offsetX, offsetY);
    drawingContext.stroke();

    [lastX, lastY] = [offsetX, offsetY];
}

// 停止绘画
function stopDrawing() {
    isDrawing = false;
}

// 清除画布
function clearCanvas() {
    if (drawingContext) {
        drawingContext.fillStyle = '#FFFFFF';
        drawingContext.fillRect(0, 0, drawingCanvas.width, drawingCanvas.height);
    }
}

// 获取坐标
function getCoordinates(e) {
    if (e.type.includes('touch')) {
        const rect = drawingCanvas.getBoundingClientRect();
        const touch = e.touches[0];
        return {
            offsetX: touch.clientX - rect.left,
            offsetY: touch.clientY - rect.top
        };
    } else {
        return {
            offsetX: e.offsetX,
            offsetY: e.offsetY
        };
    }
}

// 触摸事件处理
function handleTouchStart(e) {
    e.preventDefault();
    startDrawing(e);
}

function handleTouchMove(e) {
    e.preventDefault();
    draw(e);
}

// 快速笔记相关变量
let quickNote = localStorage.getItem('quickNote') || '';
let noteSaveTimeout = null;

// 英语词典相关变量
let dictionaryHistory = JSON.parse(localStorage.getItem('dictionaryHistory')) || [];
let currentTranslationLang = 'en-zh'; // 默认英译中
const MAX_HISTORY_ITEMS = 10;

// 有道翻译API配置
const YOUDAO_APP_ID = '39569bf41ec0d264'; // 应用ID
const YOUDAO_APP_KEY = 'WFk0pXjg8EaOypm5cDPSw43wciXl8mrE'; // 应用密钥
const YOUDAO_API_URL = 'https://openapi.youdao.com/api';

// CORS解决方案选项
const CORS_SOLUTIONS = {
    NONE: 'none',
    PROXY: 'proxy',
    JSONP: 'jsonp' // 如果有道API支持
};

// 当前CORS解决方案
let currentCorsSolution = CORS_SOLUTIONS.NONE;

// CORS代理服务器（如果需要）
const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
// 注意：公共CORS代理可能不稳定，建议使用自己的代理服务器

// 显示实用工具
function showUtilityTool(tool) {
    switch (tool) {
        case 'quick-note':
            showQuickNoteModal();
            break;
        case 'pomodoro-timer':
            showPomodoroModal();
            break;
        case 'focus-stats-btn':
            showFocusStatsModal();
            break;
        case 'dictionary-btn':
            showDictionaryModal();
            break;
    }
}


// 显示快速笔记模态框
function showQuickNoteModal() {
    const modal = document.getElementById('quick-note-modal');
    const noteContent = document.getElementById('note-content');

    // 加载保存的笔记
    noteContent.value = quickNote;

    // 显示模态框
    modal.classList.add('active');

    // 自动聚焦到文本区域
    setTimeout(() => {
        noteContent.focus();
    }, 100);
}

// 显示英语词典模态框
function showDictionaryModal() {
    const modal = document.getElementById('dictionary-modal');
    const dictionaryInput = document.getElementById('dictionary-input');

    // 显示模态框
    modal.classList.add('active');

    // 自动聚焦到输入框
    setTimeout(() => {
        dictionaryInput.focus();
    }, 100);

    // 更新历史记录显示
    updateDictionaryHistoryDisplay();
}

// 初始化快速笔记功能
function initQuickNote() {
    const modal = document.getElementById('quick-note-modal');
    const noteContent = document.getElementById('note-content');
    const closeBtn = document.getElementById('close-quick-note');
    const saveBtn = document.getElementById('save-note');
    const clearBtn = document.getElementById('clear-note');
    const exportBtn = document.getElementById('export-note');

    // 关闭按钮事件
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        saveQuickNote();
    });

    // 点击模态框背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            saveQuickNote();
        }
    });

    // 保存按钮事件
    saveBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        saveQuickNote();
    });

    // 清空按钮事件
    clearBtn.addEventListener('click', () => {
        if (confirm('确定要清空笔记内容吗？此操作不可撤销。')) {
            noteContent.value = '';
            quickNote = '';
            localStorage.removeItem('quickNote');
        }
    });

    // 导出按钮事件
    exportBtn.addEventListener('click', () => {
        exportNoteAsText();
    });

    // 实时自动保存
    noteContent.addEventListener('input', () => {
        // 清除之前的定时器
        if (noteSaveTimeout) {
            clearTimeout(noteSaveTimeout);
        }

        // 设置新的定时器（防抖）
        noteSaveTimeout = setTimeout(() => {
            saveQuickNote();
        }, 1000); // 1秒后自动保存
    });

    // 当用户离开文本框时立即保存
    noteContent.addEventListener('blur', () => {
        if (noteSaveTimeout) {
            clearTimeout(noteSaveTimeout);
        }
        saveQuickNote();
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            saveQuickNote();
        }
    });
}

// 保存快速笔记
function saveQuickNote() {
    const noteContent = document.getElementById('note-content');
    if (noteContent) {
        quickNote = noteContent.value.trim();
        localStorage.setItem('quickNote', quickNote);
    }
}

// 初始化英语词典功能
function initDictionary() {
    const modal = document.getElementById('dictionary-modal');
    const dictionaryInput = document.getElementById('dictionary-input');
    const translateBtn = document.getElementById('translate-btn');
    const closeBtn = document.getElementById('close-dictionary');
    const closeDictionaryBtn = document.getElementById('close-dictionary-btn');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const langButtons = document.querySelectorAll('.lang-btn');
    const historyList = document.getElementById('history-list');

    // 关闭按钮事件
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    if (closeDictionaryBtn) {
        closeDictionaryBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // 清空历史按钮事件
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            if (confirm('确定要清空所有查询历史吗？此操作不可撤销。')) {
                dictionaryHistory = [];
                localStorage.setItem('dictionaryHistory', JSON.stringify(dictionaryHistory));
                updateDictionaryHistoryDisplay();
            }
        });
    }

    // 点击模态框背景关闭
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // 语言切换按钮事件
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentTranslationLang = button.dataset.lang;
        });
    });

    // 翻译按钮事件
    if (translateBtn) {
        translateBtn.addEventListener('click', performTranslation);
    }

    // 输入框回车键事件
    if (dictionaryInput) {
        dictionaryInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performTranslation();
            }
        });
    }

    // 初始化历史记录显示
    updateDictionaryHistoryDisplay();
}

// 执行翻译
function performTranslation() {
    const dictionaryInput = document.getElementById('dictionary-input');
    const translationResult = document.getElementById('translation-result');

    if (!dictionaryInput || !translationResult) return;

    const query = dictionaryInput.value.trim();

    if (!query) {
        alert('请输入要翻译的单词或短语');
        dictionaryInput.focus();
        return;
    }

    // 显示加载状态
    translationResult.innerHTML = `
        <div class="result-placeholder">
            <i class="fas fa-spinner fa-spin"></i>
            <p>正在翻译...</p>
        </div>
    `;

    // 调用有道翻译API
    callYoudaoAPI(query, currentTranslationLang)
        .then(translation => {
            // 显示翻译结果
            translationResult.innerHTML = `
                <div class="translation-content">
                    <div class="original-text">
                        <strong>原文:</strong> ${query}
                    </div>
                    <div class="translated-text">
                        <strong>翻译:</strong> ${translation}
                    </div>
                    <div class="translation-info">
                        <small><i class="fas fa-info-circle"></i> 翻译方向: ${currentTranslationLang === 'en-zh' ? '英 → 中' : '中 → 英'}</small>
                    </div>
                </div>
            `;

            // 添加到历史记录
            addToHistory(query, translation, currentTranslationLang);

            // 清空输入框
            dictionaryInput.value = '';
        })
        .catch(error => {
            console.error('翻译API调用失败:', error);

            // 显示错误信息和解决方案
            let errorMessage = '翻译服务暂时不可用';
            let solutionTips = '';

            if (error.message.includes('CORS') || error.message.includes('网络请求失败')) {
                errorMessage = '遇到CORS限制，无法直接调用翻译API';
                solutionTips = `
                    <div class="solution-tips">
                        <strong>解决方案：</strong>
                        <ol>
                            <li>使用 <strong>Chrome浏览器</strong> 并安装 <strong>CORS解除扩展</strong></li>
                            <li>使用 <strong>Live Server</strong> 等本地开发服务器打开文件</li>
                            <li>将文件部署到 <strong>Web服务器</strong> 或 <strong>GitHub Pages</strong></li>
                            <li>使用命令启动Chrome禁用CORS：<code>chrome.exe --disable-web-security --user-data-dir="C:/ChromeDevSession"</code></li>
                        </ol>
                    </div>
                `;
            } else if (error.message.includes('应用ID无效')) {
                errorMessage = 'API配置错误：应用ID或密钥无效';
                solutionTips = '请检查有道翻译API的应用ID和密钥配置';
            } else if (error.message.includes('翻译文本过长')) {
                errorMessage = '翻译文本过长';
                solutionTips = '请缩短文本长度后重试（建议不超过500字符）';
            } else if (error.message.includes('查询参数不能为空')) {
                errorMessage = '请输入要翻译的文本';
            } else {
                solutionTips = `错误详情：${error.message}`;
            }

            // 如果API调用失败，使用模拟翻译作为后备
            const translation = mockTranslate(query, currentTranslationLang);

            translationResult.innerHTML = `
                <div class="translation-content">
                    <div class="original-text">
                        <strong>原文:</strong> ${query}
                    </div>
                    <div class="translated-text">
                        <strong>翻译:</strong> ${translation}
                    </div>
                    <div class="translation-info">
                        <small><i class="fas fa-info-circle"></i> 翻译方向: ${currentTranslationLang === 'en-zh' ? '英 → 中' : '中 → 英'} (使用离线翻译)</small>
                        <br>
                        <small><i class="fas fa-exclamation-triangle"></i> ${errorMessage}</small>
                        ${solutionTips ? `<br><small>${solutionTips}</small>` : ''}
                    </div>
                </div>
            `;

            // 添加到历史记录
            addToHistory(query, translation, currentTranslationLang);

            // 清空输入框
            dictionaryInput.value = '';
        });
}

// 调用有道翻译API
async function callYoudaoAPI(query, lang) {
    try {
        // 根据语言方向设置from和to参数
        let from, to;
        if (lang === 'en-zh') {
            from = 'en';
            to = 'zh-CHS';
        } else {
            from = 'zh-CHS';
            to = 'en';
        }

        // 生成时间戳（salt）
        const salt = Date.now().toString();

        // 生成签名：sign = md5(appKey + q + salt + appSecret)
        // 使用v1版本的签名方式，更简单兼容
        const signStr = YOUDAO_APP_ID + query + salt + YOUDAO_APP_KEY;
        const sign = generateMD5(signStr);

        // 构建POST请求参数
        const params = new URLSearchParams();
        params.append('q', query);
        params.append('from', from);
        params.append('to', to);
        params.append('appKey', YOUDAO_APP_ID);
        params.append('salt', salt);
        params.append('sign', sign);
        params.append('signType', 'v1'); // 使用v1版本

        // 尝试不同的请求方式来处理CORS问题
        let response, data;
        let lastError = null;

        // 方法1：直接调用API
        try {
            response = await fetch(YOUDAO_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: params
            });

            if (!response.ok) {
                throw new Error(`HTTP错误! 状态码: ${response.status}`);
            }

            data = await response.json();
            currentCorsSolution = CORS_SOLUTIONS.NONE;
        } catch (error1) {
            console.warn('直接API调用失败:', error1);
            lastError = error1;

            // 方法2：尝试使用CORS代理
            try {
                console.log('尝试使用CORS代理...');
                const proxyUrl = CORS_PROXY_URL + YOUDAO_API_URL;

                response = await fetch(proxyUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Origin': window.location.origin,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    body: params
                });

                if (!response.ok) {
                    throw new Error(`代理请求HTTP错误! 状态码: ${response.status}`);
                }

                data = await response.json();
                currentCorsSolution = CORS_SOLUTIONS.PROXY;
            } catch (error2) {
                console.warn('CORS代理也失败:', error2);
                lastError = error2;

                // 所有方法都失败
                throw new Error(`翻译服务暂时不可用。错误: ${lastError.message}\n\n建议：\n1. 使用现代浏览器（Chrome/Firefox）\n2. 安装CORS解除扩展\n3. 将文件部署到Web服务器\n4. 使用本地开发服务器`);
            }
        }

        // 检查API返回的错误码
        if (data.errorCode && data.errorCode !== '0') {
            console.warn(`有道翻译API返回错误码: ${data.errorCode}`, data);

            // 常见错误码处理
            if (data.errorCode === '103') {
                throw new Error('翻译文本过长');
            } else if (data.errorCode === '108') {
                throw new Error('应用ID无效');
            } else if (data.errorCode === '113') {
                throw new Error('查询参数不能为空');
            }

            // 即使有错误，也可能有翻译结果
            if (data.translation && data.translation[0]) {
                return data.translation[0];
            }
            throw new Error(`有道翻译API错误: ${data.errorCode}`);
        }

        // 返回翻译结果
        if (data.translation && data.translation[0]) {
            return data.translation[0];
        } else {
            return query; // 如果没有翻译结果，返回原文本
        }
    } catch (error) {
        console.error('有道翻译API调用失败:', error);
        throw error;
    }
}

// 截断过长的查询文本（有道翻译API要求）
function truncateQuery(query) {
    if (query.length <= 20) return query;
    return query.substr(0, 10) + query.length + query.substr(-10);
}

// 生成MD5哈希
function generateMD5(str) {
    // 使用正确的MD5实现
    function md5(str) {
        // MD5算法实现
        function rotateLeft(lValue, iShiftBits) {
            return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }

        function addUnsigned(lX, lY) {
            let lX4, lY4, lX8, lY8, lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                } else {
                    return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                }
            } else {
                return (lResult ^ lX8 ^ lY8);
            }
        }

        function f(x, y, z) { return (x & y) | ((~x) & z); }
        function g(x, y, z) { return (x & z) | (y & (~z)); }
        function h(x, y, z) { return x ^ y ^ z; }
        function i(x, y, z) { return y ^ (x | (~z)); }

        function ff(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(f(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function gg(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(g(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function hh(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(h(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function ii(a, b, c, d, x, s, ac) {
            a = addUnsigned(a, addUnsigned(addUnsigned(i(b, c, d), x), ac));
            return addUnsigned(rotateLeft(a, s), b);
        }

        function convertToWordArray(str) {
            let lWordCount;
            let lMessageLength = str.length;
            let lNumberOfWords_temp1 = lMessageLength + 8;
            let lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
            let lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            let lWordArray = new Array(lNumberOfWords - 1);
            let lBytePosition = 0;
            let lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }

        function wordToHex(lValue) {
            let wordToHexValue = '', wordToHexValue_temp = '', lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                wordToHexValue_temp = '0' + lByte.toString(16);
                wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
            }
            return wordToHexValue;
        }

        let x = convertToWordArray(str);
        let a = 0x67452301;
        let b = 0xEFCDAB89;
        let c = 0x98BADCFE;
        let d = 0x10325476;

        for (let k = 0; k < x.length; k += 16) {
            let AA = a;
            let BB = b;
            let CC = c;
            let DD = d;

            a = ff(a, b, c, d, x[k + 0], 7, 0xD76AA478);
            d = ff(d, a, b, c, x[k + 1], 12, 0xE8C7B756);
            c = ff(c, d, a, b, x[k + 2], 17, 0x242070DB);
            b = ff(b, c, d, a, x[k + 3], 22, 0xC1BDCEEE);
            a = ff(a, b, c, d, x[k + 4], 7, 0xF57C0FAF);
            d = ff(d, a, b, c, x[k + 5], 12, 0x4787C62A);
            c = ff(c, d, a, b, x[k + 6], 17, 0xA8304613);
            b = ff(b, c, d, a, x[k + 7], 22, 0xFD469501);
            a = ff(a, b, c, d, x[k + 8], 7, 0x698098D8);
            d = ff(d, a, b, c, x[k + 9], 12, 0x8B44F7AF);
            c = ff(c, d, a, b, x[k + 10], 17, 0xFFFF5BB1);
            b = ff(b, c, d, a, x[k + 11], 22, 0x895CD7BE);
            a = ff(a, b, c, d, x[k + 12], 7, 0x6B901122);
            d = ff(d, a, b, c, x[k + 13], 12, 0xFD987193);
            c = ff(c, d, a, b, x[k + 14], 17, 0xA679438E);
            b = ff(b, c, d, a, x[k + 15], 22, 0x49B40821);

            a = gg(a, b, c, d, x[k + 1], 5, 0xF61E2562);
            d = gg(d, a, b, c, x[k + 6], 9, 0xC040B340);
            c = gg(c, d, a, b, x[k + 11], 14, 0x265E5A51);
            b = gg(b, c, d, a, x[k + 0], 20, 0xE9B6C7AA);
            a = gg(a, b, c, d, x[k + 5], 5, 0xD62F105D);
            d = gg(d, a, b, c, x[k + 10], 9, 0x02441453);
            c = gg(c, d, a, b, x[k + 15], 14, 0xD8A1E681);
            b = gg(b, c, d, a, x[k + 4], 20, 0xE7D3FBC8);
            a = gg(a, b, c, d, x[k + 9], 5, 0x21E1CDE6);
            d = gg(d, a, b, c, x[k + 14], 9, 0xC33707D6);
            c = gg(c, d, a, b, x[k + 3], 14, 0xF4D50D87);
            b = gg(b, c, d, a, x[k + 8], 20, 0x455A14ED);
            a = gg(a, b, c, d, x[k + 13], 5, 0xA9E3E905);
            d = gg(d, a, b, c, x[k + 2], 9, 0xFCEFA3F8);
            c = gg(c, d, a, b, x[k + 7], 14, 0x676F02D9);
            b = gg(b, c, d, a, x[k + 12], 20, 0x8D2A4C8A);

            a = hh(a, b, c, d, x[k + 5], 4, 0xFFFA3942);
            d = hh(d, a, b, c, x[k + 8], 11, 0x8771F681);
            c = hh(c, d, a, b, x[k + 11], 16, 0x6D9D6122);
            b = hh(b, c, d, a, x[k + 14], 23, 0xFDE5380C);
            a = hh(a, b, c, d, x[k + 1], 4, 0xA4BEEA44);
            d = hh(d, a, b, c, x[k + 4], 11, 0x4BDECFA9);
            c = hh(c, d, a, b, x[k + 7], 16, 0xF6BB4B60);
            b = hh(b, c, d, a, x[k + 10], 23, 0xBEBFBC70);
            a = hh(a, b, c, d, x[k + 13], 4, 0x289B7EC6);
            d = hh(d, a, b, c, x[k + 0], 11, 0xEAA127FA);
            c = hh(c, d, a, b, x[k + 3], 16, 0xD4EF3085);
            b = hh(b, c, d, a, x[k + 6], 23, 0x04881D05);
            a = hh(a, b, c, d, x[k + 9], 4, 0xD9D4D039);
            d = hh(d, a, b, c, x[k + 12], 11, 0xE6DB99E5);
            c = hh(c, d, a, b, x[k + 15], 16, 0x1FA27CF8);
            b = hh(b, c, d, a, x[k + 2], 23, 0xC4AC5665);

            a = ii(a, b, c, d, x[k + 0], 6, 0xF4292244);
            d = ii(d, a, b, c, x[k + 7], 10, 0x432AFF97);
            c = ii(c, d, a, b, x[k + 14], 15, 0xAB9423A7);
            b = ii(b, c, d, a, x[k + 5], 21, 0xFC93A039);
            a = ii(a, b, c, d, x[k + 12], 6, 0x655B59C3);
            d = ii(d, a, b, c, x[k + 3], 10, 0x8F0CCC92);
            c = ii(c, d, a, b, x[k + 10], 15, 0xFFEFF47D);
            b = ii(b, c, d, a, x[k + 1], 21, 0x85845DD1);
            a = ii(a, b, c, d, x[k + 8], 6, 0x6FA87E4F);
            d = ii(d, a, b, c, x[k + 15], 10, 0xFE2CE6E0);
            c = ii(c, d, a, b, x[k + 6], 15, 0xA3014314);
            b = ii(b, c, d, a, x[k + 13], 21, 0x4E0811A1);
            a = ii(a, b, c, d, x[k + 4], 6, 0xF7537E82);
            d = ii(d, a, b, c, x[k + 11], 10, 0xBD3AF235);
            c = ii(c, d, a, b, x[k + 2], 15, 0x2AD7D2BB);
            b = ii(b, c, d, a, x[k + 9], 21, 0xEB86D391);

            a = addUnsigned(a, AA);
            b = addUnsigned(b, BB);
            c = addUnsigned(c, CC);
            d = addUnsigned(d, DD);
        }

        return wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
    }

    return md5(str);
}

// 模拟翻译函数（作为API调用失败时的后备）
function mockTranslate(query, lang) {
    // 简单的模拟翻译数据
    const mockDictionary = {
        'en-zh': {
            'hello': '你好',
            'world': '世界',
            'computer': '计算机',
            'programming': '编程',
            'dictionary': '词典',
            'translation': '翻译',
            'good morning': '早上好',
            'thank you': '谢谢',
            'goodbye': '再见',
            'apple': '苹果'
        },
        'zh-en': {
            '你好': 'hello',
            '世界': 'world',
            '计算机': 'computer',
            '编程': 'programming',
            '词典': 'dictionary',
            '翻译': 'translation',
            '早上好': 'good morning',
            '谢谢': 'thank you',
            '再见': 'goodbye',
            '苹果': 'apple'
        }
    };

    const direction = mockDictionary[lang];
    if (direction && direction[query.toLowerCase()]) {
        return direction[query.toLowerCase()];
    }

    // 如果找不到匹配，返回模拟翻译
    if (lang === 'en-zh') {
        return `"${query}" 的中文翻译`;
    } else {
        return `"${query}" 的英文翻译`;
    }
}

// 添加到历史记录
function addToHistory(query, translation, lang) {
    const historyItem = {
        id: Date.now(),
        query: query,
        translation: translation,
        lang: lang,
        timestamp: new Date().toISOString()
    };

    // 添加到历史记录数组开头
    dictionaryHistory.unshift(historyItem);

    // 限制历史记录数量
    if (dictionaryHistory.length > MAX_HISTORY_ITEMS) {
        dictionaryHistory = dictionaryHistory.slice(0, MAX_HISTORY_ITEMS);
    }

    // 保存到本地存储
    localStorage.setItem('dictionaryHistory', JSON.stringify(dictionaryHistory));

    // 更新显示
    updateDictionaryHistoryDisplay();
}

// 更新历史记录显示
function updateDictionaryHistoryDisplay() {
    const historyList = document.getElementById('history-list');

    if (!historyList) return;

    if (dictionaryHistory.length === 0) {
        historyList.innerHTML = '<div class="history-empty">暂无查询历史</div>';
        return;
    }

    historyList.innerHTML = dictionaryHistory.map(item => `
        <div class="history-item" data-id="${item.id}">
            <div class="history-query">${item.query}</div>
            <div class="history-translation">${item.translation}</div>
            <div class="history-meta">
                <small>${item.lang === 'en-zh' ? '英→中' : '中→英'} • ${new Date(item.timestamp).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}</small>
            </div>
        </div>
    `).join('');

    // 为历史记录项添加点击事件
    document.querySelectorAll('.history-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.dataset.id;
            const historyItem = dictionaryHistory.find(h => h.id.toString() === id);
            if (historyItem) {
                const dictionaryInput = document.getElementById('dictionary-input');
                const translationResult = document.getElementById('translation-result');

                if (dictionaryInput) {
                    dictionaryInput.value = historyItem.query;
                }

                // 设置对应的语言按钮
                const langButtons = document.querySelectorAll('.lang-btn');
                langButtons.forEach(btn => {
                    if (btn.dataset.lang === historyItem.lang) {
                        btn.click();
                    }
                });

                // 显示翻译结果
                if (translationResult) {
                    translationResult.innerHTML = `
                        <div class="translation-content">
                            <div class="original-text">
                                <strong>原文:</strong> ${historyItem.query}
                            </div>
                            <div class="translated-text">
                                <strong>翻译:</strong> ${historyItem.translation}
                            </div>
                            <div class="translation-info">
                                <small><i class="fas fa-info-circle"></i> 翻译方向: ${historyItem.lang === 'en-zh' ? '英 → 中' : '中 → 英'}</small>
                            </div>
                        </div>
                    `;
                }
            }
        });
    });
}

// 导出笔记为文本文件
function exportNoteAsText() {
    const noteContent = document.getElementById('note-content');
    const content = noteContent.value.trim();

    if (!content) {
        alert('笔记内容为空，无法导出。');
        return;
    }

    // 创建Blob对象
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // 创建下载链接
    const a = document.createElement('a');
    a.href = url;
    a.download = `快速笔记_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();

    // 清理
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);

    alert('笔记已导出为文本文件！');
}

// 番茄钟相关变量
let pomodoroInterval = null;
let pomodoroTimeLeft = 25 * 60; // 默认25分钟，单位秒
let pomodoroIsRunning = false;
let pomodoroMode = 'focus'; // 'focus', 'short_break', 'long_break'
let pomodoroCycles = 0;
let pomodoroCyclesCompleted = 0;
let pomodoroTodayCount = parseInt(localStorage.getItem('pomodoroTodayCount')) || 0;
let pomodoroTotalCount = parseInt(localStorage.getItem('pomodoroTotalCount')) || 0;
let pomodoroLastDate = localStorage.getItem('pomodoroLastDate') || '';

// 休息方法索引跟踪
let breakMethodIndices = {
    short_break: 0,
    long_break: 0
};

// 当前休息方法
let currentBreakMethod = null;

// 番茄钟设置
let pomodoroSettings = {
    focusTime: 25, // 分钟
    shortBreakTime: 5, // 分钟
    longBreakTime: 15, // 分钟
    cyclesBeforeLongBreak: 4
};

// 加载保存的设置
function loadPomodoroSettings() {
    const saved = localStorage.getItem('pomodoroSettings');
    if (saved) {
        pomodoroSettings = JSON.parse(saved);
    }
}

// 保存设置
function savePomodoroSettings() {
    localStorage.setItem('pomodoroSettings', JSON.stringify(pomodoroSettings));
}

// 显示番茄钟模态框
function showPomodoroModal() {
    const modal = document.getElementById('pomodoro-modal');

    // 更新今日统计（如果日期变化）
    updateTodayStats();

    // 如果当前是休息模式且没有休息方法，获取一个
    if ((pomodoroMode === 'short_break' || pomodoroMode === 'long_break') && !currentBreakMethod) {
        currentBreakMethod = getBreakMethod(pomodoroMode);
    }

    // 更新显示
    updatePomodoroDisplay();
    updateSettingsDisplay();
    updateStatsDisplay();

    // 显示模态框
    modal.classList.add('active');
}

// 初始化番茄钟功能
function initPomodoro() {
    const modal = document.getElementById('pomodoro-modal');
    const closeBtn = document.getElementById('close-pomodoro');
    const startBtn = document.getElementById('start-pomodoro');
    const pauseBtn = document.getElementById('pause-pomodoro');
    const resetBtn = document.getElementById('reset-pomodoro');
    const skipBtn = document.getElementById('skip-session');
    const resetStatsBtn = document.getElementById('reset-stats');

    // 加载设置
    loadPomodoroSettings();

    // 关闭按钮事件
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        stopPomodoro();
    });

    // 点击模态框背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            stopPomodoro();
        }
    });

    // 开始按钮
    startBtn.addEventListener('click', startPomodoro);

    // 暂停按钮
    pauseBtn.addEventListener('click', pausePomodoro);

    // 重置按钮
    resetBtn.addEventListener('click', resetPomodoro);

    // 跳过按钮
    skipBtn.addEventListener('click', skipSession);

    // 重置统计按钮
    resetStatsBtn.addEventListener('click', resetPomodoroStats);

    // 设置滑块事件
    initPomodoroSettings();

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            stopPomodoro();
        }
    });
}

// 初始化番茄钟设置滑块
function initPomodoroSettings() {
    const focusTime = document.getElementById('focus-time');
    const breakTime = document.getElementById('break-time');
    const longBreakTime = document.getElementById('long-break-time');
    const cyclesSlider = document.getElementById('cycles-before-long-break');

    // 设置滑块值
    focusTime.value = pomodoroSettings.focusTime;
    breakTime.value = pomodoroSettings.shortBreakTime;
    longBreakTime.value = pomodoroSettings.longBreakTime;
    cyclesSlider.value = pomodoroSettings.cyclesBeforeLongBreak;

    // 更新显示值
    updateSettingsDisplay();

    // 添加事件监听
    focusTime.addEventListener('input', () => {
        pomodoroSettings.focusTime = parseInt(focusTime.value);
        updateSettingsDisplay();
        savePomodoroSettings();
        if (pomodoroMode === 'focus' && !pomodoroIsRunning) {
            pomodoroTimeLeft = pomodoroSettings.focusTime * 60;
            updatePomodoroDisplay();
        }
    });

    breakTime.addEventListener('input', () => {
        pomodoroSettings.shortBreakTime = parseInt(breakTime.value);
        updateSettingsDisplay();
        savePomodoroSettings();
    });

    longBreakTime.addEventListener('input', () => {
        pomodoroSettings.longBreakTime = parseInt(longBreakTime.value);
        updateSettingsDisplay();
        savePomodoroSettings();
    });

    cyclesSlider.addEventListener('input', () => {
        pomodoroSettings.cyclesBeforeLongBreak = parseInt(cyclesSlider.value);
        updateSettingsDisplay();
        savePomodoroSettings();
    });
}

// 更新设置显示
function updateSettingsDisplay() {
    document.getElementById('focus-value').textContent = pomodoroSettings.focusTime;
    document.getElementById('break-value').textContent = pomodoroSettings.shortBreakTime;
    document.getElementById('long-break-value').textContent = pomodoroSettings.longBreakTime;
    document.getElementById('cycles-value').textContent = `${pomodoroSettings.cyclesBeforeLongBreak} 个番茄后长休息`;
}

// 更新统计显示
function updateStatsDisplay() {
    document.getElementById('today-count').textContent = `${pomodoroTodayCount} 个番茄`;
    document.getElementById('total-count').textContent = `${pomodoroTotalCount} 个番茄`;
}

// 更新今日统计（检查日期变化）
function updateTodayStats() {
    const today = new Date().toISOString().split('T')[0];

    if (pomodoroLastDate !== today) {
        pomodoroTodayCount = 0;
        pomodoroLastDate = today;
        localStorage.setItem('pomodoroTodayCount', pomodoroTodayCount);
        localStorage.setItem('pomodoroLastDate', pomodoroLastDate);
        updateStatsDisplay();
    }
}

// 开始番茄钟
function startPomodoro() {
    if (pomodoroIsRunning) return;

    pomodoroIsRunning = true;

    // 更新按钮状态
    document.getElementById('start-pomodoro').disabled = true;
    document.getElementById('pause-pomodoro').disabled = false;

    // 开始计时
    pomodoroInterval = setInterval(() => {
        pomodoroTimeLeft--;

        if (pomodoroTimeLeft <= 0) {
            // 时间到
            completeSession();
        }

        updatePomodoroDisplay();
    }, 1000);
}

// 暂停番茄钟
function pausePomodoro() {
    if (!pomodoroIsRunning) return;

    pomodoroIsRunning = false;
    clearInterval(pomodoroInterval);

    // 更新按钮状态
    document.getElementById('start-pomodoro').disabled = false;
    document.getElementById('pause-pomodoro').disabled = true;
}

// 停止番茄钟（完全停止）
function stopPomodoro() {
    pomodoroIsRunning = false;
    clearInterval(pomodoroInterval);
}

// 重置番茄钟
function resetPomodoro() {
    stopPomodoro();

    // 重置为当前模式的时间
    switch (pomodoroMode) {
        case 'focus':
            pomodoroTimeLeft = pomodoroSettings.focusTime * 60;
            break;
        case 'short_break':
            pomodoroTimeLeft = pomodoroSettings.shortBreakTime * 60;
            break;
        case 'long_break':
            pomodoroTimeLeft = pomodoroSettings.longBreakTime * 60;
            break;
    }

    // 如果当前是休息模式，重新获取休息方法
    if (pomodoroMode === 'short_break' || pomodoroMode === 'long_break') {
        currentBreakMethod = getBreakMethod(pomodoroMode);
    } else {
        currentBreakMethod = null;
    }

    // 更新按钮状态
    document.getElementById('start-pomodoro').disabled = false;
    document.getElementById('pause-pomodoro').disabled = true;

    updatePomodoroDisplay();
}

// 跳过当前会话
function skipSession() {
    stopPomodoro();
    completeSession();
}

// 完成当前会话
function completeSession() {
    stopPomodoro();

    if (pomodoroMode === 'focus') {
        // 完成一个番茄钟
        pomodoroCyclesCompleted++;
        pomodoroTodayCount++;
        pomodoroTotalCount++;

        // 记录番茄钟专注时间
        const focusMinutes = pomodoroSettings.focusTime;
        addFocusTime(focusMinutes, 'pomodoro');

        // 保存统计
        localStorage.setItem('pomodoroTodayCount', pomodoroTodayCount);
        localStorage.setItem('pomodoroTotalCount', pomodoroTotalCount);
        localStorage.setItem('pomodoroLastDate', pomodoroLastDate);

        updateStatsDisplay();

        // 播放提示音（如果支持）
        playNotificationSound();

        // 决定下一个模式
        if (pomodoroCyclesCompleted >= pomodoroSettings.cyclesBeforeLongBreak) {
            // 长休息
            pomodoroMode = 'long_break';
            pomodoroTimeLeft = pomodoroSettings.longBreakTime * 60;
            pomodoroCyclesCompleted = 0;

            // 获取长休息方法
            currentBreakMethod = getBreakMethod('long_break');
        } else {
            // 短休息
            pomodoroMode = 'short_break';
            pomodoroTimeLeft = pomodoroSettings.shortBreakTime * 60;

            // 获取短休息方法
            currentBreakMethod = getBreakMethod('short_break');
        }

        // 显示休息通知（包含科学休息方法）
        if (currentBreakMethod) {
            const breakType = pomodoroMode === 'long_break' ? '长休息' : '短休息';
            const notificationMessage = `${breakType}时间到！\n\n建议活动：${currentBreakMethod.title}\n${currentBreakMethod.description}`;
            showNotification('休息时间！', notificationMessage);
        } else {
            showNotification('番茄钟完成！', '休息一下吧~');
        }
    } else {
        // 休息结束，开始下一个专注
        pomodoroMode = 'focus';
        pomodoroTimeLeft = pomodoroSettings.focusTime * 60;

        // 清除当前休息方法
        currentBreakMethod = null;

        // 播放提示音
        playNotificationSound();

        // 显示开始通知
        showNotification('休息结束！', '开始下一个番茄钟吧~');
    }

    // 更新显示
    updatePomodoroDisplay();

    // 如果设置了自动开始，可以在这里自动开始下一个会话
    // autoStartNextSession();
}

// 更新番茄钟显示
function updatePomodoroDisplay() {
    const display = document.getElementById('pomodoro-timer-display');
    const statusText = document.getElementById('status-text');
    const cycleCount = document.getElementById('cycle-count');
    const timerLabel = document.getElementById('timer-label');

    // 格式化时间
    const minutes = Math.floor(pomodoroTimeLeft / 60);
    const seconds = pomodoroTimeLeft % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // 更新状态
    switch (pomodoroMode) {
        case 'focus':
            statusText.textContent = '专注中';
            statusText.style.color = 'var(--morandi-dark-gray)';
            timerLabel.textContent = '专注时间';
            cycleCount.textContent = `第 ${pomodoroCyclesCompleted + 1} 个番茄`;
            break;
        case 'short_break':
            statusText.textContent = '短休息';
            statusText.style.color = 'var(--morandi-sage)';
            timerLabel.textContent = '休息时间';
            // 显示科学休息方法
            if (currentBreakMethod) {
                cycleCount.textContent = currentBreakMethod.title;
                cycleCount.title = currentBreakMethod.description; // 添加提示文本
            } else {
                cycleCount.textContent = '短暂休息';
                cycleCount.title = '';
            }
            break;
        case 'long_break':
            statusText.textContent = '长休息';
            statusText.style.color = 'var(--morandi-gray-blue)';
            timerLabel.textContent = '休息时间';
            // 显示科学休息方法
            if (currentBreakMethod) {
                cycleCount.textContent = currentBreakMethod.title;
                cycleCount.title = currentBreakMethod.description; // 添加提示文本
            } else {
                cycleCount.textContent = '好好休息';
                cycleCount.title = '';
            }
            break;
    }
}

// 播放通知音（使用Web Audio API）
function playNotificationSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    } catch (e) {
        console.log('音频播放失败，可能是浏览器不支持或用户未交互');
    }
}

// 显示通知
function showNotification(title, message) {
    // 检查浏览器是否支持通知
    if (!("Notification" in window)) {
        console.log("此浏览器不支持桌面通知");
        return;
    }

    // 检查是否已授予权限
    if (Notification.permission === "granted") {
        new Notification(title, { body: message, icon: null });
    } else if (Notification.permission !== "denied") {
        // 请求权限
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(title, { body: message, icon: null });
            }
        });
    }
}

// 重置番茄钟统计
function resetPomodoroStats() {
    if (confirm('确定要重置番茄钟统计吗？此操作不可撤销。')) {
        pomodoroTodayCount = 0;
        pomodoroTotalCount = 0;
        pomodoroCycles = 0;
        pomodoroCyclesCompleted = 0;

        // 重置休息方法索引
        breakMethodIndices.short_break = 0;
        breakMethodIndices.long_break = 0;
        currentBreakMethod = null;

        localStorage.removeItem('pomodoroTodayCount');
        localStorage.removeItem('pomodoroTotalCount');
        localStorage.removeItem('pomodoroLastDate');

        updateStatsDisplay();
        updatePomodoroDisplay();
    }
}

// ==================== 专注统计功能 ====================

// 专注统计相关变量
let focusStats = {
    today: {
        total: 0, // 总分钟数
        pomodoro: 0, // 番茄钟分钟数
        countup: 0, // 正计时分钟数
        countdown: 0 // 倒计时分钟数
    },
    month: {}, // 按日期存储的统计 { "2026-02-01": { total: 45, pomodoro: 25, countup: 20, countdown: 0 } }
    history: {
        longestDay: 0,
        longestDate: '',
        totalDays: 0,
        totalMinutes: 0
    }
};

// 初始化专注统计
function initFocusStats() {
    // 加载保存的统计
    loadFocusStats();

    // 更新今日统计显示
    updateFocusStatsDisplay();

    // 更新历史统计
    updateHistoryStats();
}

// 加载专注统计
function loadFocusStats() {
    const saved = localStorage.getItem('focusStats');
    if (saved) {
        focusStats = JSON.parse(saved);
    }

    // 检查今天是否是新的一天
    const today = new Date().toISOString().split('T')[0];
    if (!focusStats.today || focusStats.today.date !== today) {
        focusStats.today = {
            date: today,
            total: 0,
            pomodoro: 0,
            countup: 0,
            countdown: 0
        };
    }
}

// 保存专注统计
function saveFocusStats() {
    localStorage.setItem('focusStats', JSON.stringify(focusStats));
}

// 添加专注时间
function addFocusTime(minutes, type = 'pomodoro') {
    const today = new Date().toISOString().split('T')[0];

    // 更新今日统计
    focusStats.today.total += minutes;
    focusStats.today[type] += minutes;

    // 更新本月统计
    if (!focusStats.month[today]) {
        focusStats.month[today] = {
            total: 0,
            pomodoro: 0,
            countup: 0,
            countdown: 0
        };
    }
    focusStats.month[today].total += minutes;
    focusStats.month[today][type] += minutes;

    // 更新历史统计
    updateHistoryStats();

    // 保存并更新显示
    saveFocusStats();
    updateFocusStatsDisplay();
}

// 更新专注统计显示
function updateFocusStatsDisplay() {
    if (!statsTodayTotalElement) return;

    // 更新今日统计
    statsTodayTotalElement.textContent = `${focusStats.today.total}分钟`;
    statsTodayPomodoroElement.textContent = `${focusStats.today.pomodoro}分钟`;
    statsTodayCountupElement.textContent = `${focusStats.today.countup}分钟`;
    statsTodayCountdownElement.textContent = `${focusStats.today.countdown}分钟`;

    // 更新本月统计
    const monthDays = Object.keys(focusStats.month);
    const monthTotal = monthDays.reduce((sum, date) => sum + focusStats.month[date].total, 0);
    const monthAverage = monthDays.length > 0 ? Math.round(monthTotal / monthDays.length) : 0;

    statsMonthTotalElement.textContent = `${monthTotal}分钟`;
    statsMonthDaysElement.textContent = `${monthDays.length}天`;
    statsMonthAverageElement.textContent = `${monthAverage}分钟`;

    // 更新本周统计图表
    updateWeekChart();
}

// 更新本周统计图表
function updateWeekChart() {
    const weekChartElement = document.getElementById('week-chart');
    if (!weekChartElement) return;

    // 获取最近7天的数据
    const weekData = getWeekData();

    // 清空图表
    weekChartElement.innerHTML = '';

    // 计算最大专注时间（用于缩放）
    const maxFocus = Math.max(...weekData.map(day => day.total), 1);

    // 创建每日柱状图
    weekData.forEach(day => {
        const dayBar = document.createElement('div');
        dayBar.className = 'day-bar';

        // 计算各类型的高度比例
        const pomodoroHeight = (day.pomodoro / maxFocus) * 100;
        const countupHeight = (day.countup / maxFocus) * 100;
        const countdownHeight = (day.countdown / maxFocus) * 100;

        // 创建柱状图段
        if (day.countdown > 0) {
            const countdownSegment = document.createElement('div');
            countdownSegment.className = 'bar-segment countdown';
            countdownSegment.style.height = `${countdownHeight}%`;
            countdownSegment.title = `倒计时: ${day.countdown}分钟`;
            dayBar.appendChild(countdownSegment);
        }

        if (day.countup > 0) {
            const countupSegment = document.createElement('div');
            countupSegment.className = 'bar-segment countup';
            countupSegment.style.height = `${countupHeight}%`;
            countupSegment.title = `正计时: ${day.countup}分钟`;
            dayBar.appendChild(countupSegment);
        }

        if (day.pomodoro > 0) {
            const pomodoroSegment = document.createElement('div');
            pomodoroSegment.className = 'bar-segment pomodoro';
            pomodoroSegment.style.height = `${pomodoroHeight}%`;
            pomodoroSegment.title = `番茄钟: ${day.pomodoro}分钟`;
            dayBar.appendChild(pomodoroSegment);
        }

        // 添加日期标签
        const dayLabel = document.createElement('div');
        dayLabel.className = 'day-label';
        dayLabel.textContent = day.dayLabel;
        dayBar.appendChild(dayLabel);

        // 添加总时长
        if (day.total > 0) {
            const dayTotal = document.createElement('div');
            dayTotal.className = 'day-total';
            dayTotal.textContent = `${day.total}分`;
            dayBar.appendChild(dayTotal);
        }

        weekChartElement.appendChild(dayBar);
    });
}

// 获取最近7天的数据
function getWeekData() {
    const weekData = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        // 获取当天的统计数据
        const dayStats = focusStats.month[dateStr] || {
            total: 0,
            pomodoro: 0,
            countup: 0,
            countdown: 0
        };

        // 格式化日期标签
        const dayLabel = formatDayLabel(date);

        weekData.push({
            date: dateStr,
            dayLabel: dayLabel,
            total: dayStats.total,
            pomodoro: dayStats.pomodoro,
            countup: dayStats.countup,
            countdown: dayStats.countdown
        });
    }

    return weekData;
}

// 格式化日期标签
function formatDayLabel(date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
        return '今天';
    } else if (date.toDateString() === yesterday.toDateString()) {
        return '昨天';
    } else {
        const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        return weekDays[date.getDay()];
    }
}


// 更新历史统计（已删除历史统计部分，此函数为空）
function updateHistoryStats() {
    // 历史统计部分已被删除，此函数不再执行任何操作
    // 但仍然更新历史统计对象以供其他功能使用
    const days = Object.keys(focusStats.month);
    if (days.length === 0) {
        focusStats.history = {
            longestDay: 0,
            longestDate: '',
            totalDays: 0,
            totalMinutes: 0
        };
        return;
    }

    // 计算最长专注日
    let longestDay = 0;
    let longestDate = '';
    let totalMinutes = 0;

    days.forEach(date => {
        const dayStats = focusStats.month[date];
        totalMinutes += dayStats.total;

        if (dayStats.total > longestDay) {
            longestDay = dayStats.total;
            longestDate = date;
        }
    });

    // 更新历史统计对象
    focusStats.history = {
        longestDay,
        longestDate,
        totalDays: days.length,
        totalMinutes
    };
}

// 重置今日统计
function resetTodayStats() {
    if (confirm('确定要重置今日专注统计吗？此操作不可撤销。')) {
        const today = new Date().toISOString().split('T')[0];

        // 重置今日统计
        focusStats.today = {
            date: today,
            total: 0,
            pomodoro: 0,
            countup: 0,
            countdown: 0
        };

        // 从本月统计中移除今日数据
        delete focusStats.month[today];

        // 保存并更新显示
        saveFocusStats();
        updateFocusStatsDisplay();
        updateHistoryStats();
    }
}

// 导出统计数据
function exportStats() {
    // 创建统计报告
    const report = `专注统计报告
生成时间: ${new Date().toLocaleString('zh-CN')}

今日统计:
总专注时间: ${focusStats.today.total}分钟
番茄钟: ${focusStats.today.pomodoro}分钟
正计时: ${focusStats.today.countup}分钟
倒计时: ${focusStats.today.countdown}分钟

本月统计:
总专注时间: ${Object.values(focusStats.month).reduce((sum, day) => sum + day.total, 0)}分钟
专注天数: ${Object.keys(focusStats.month).length}天

历史统计:
最长专注日: ${focusStats.history.longestDay}分钟 (${focusStats.history.longestDate})
平均每日专注: ${focusStats.history.totalDays > 0 ? Math.round(focusStats.history.totalMinutes / focusStats.history.totalDays) : 0}分钟
总专注天数: ${focusStats.history.totalDays}天

详细记录:
${Object.keys(focusStats.month).map(date => {
    const day = focusStats.month[date];
    return `${date}: ${day.total}分钟 (番茄钟:${day.pomodoro} 正计时:${day.countup} 倒计时:${day.countdown})`;
}).join('\n')}`;

    // 创建Blob对象
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // 创建下载链接
    const a = document.createElement('a');
    a.href = url;
    a.download = `专注统计_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();

    // 清理
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);

    alert('统计数据已导出为文本文件！');
}

// 显示专注统计模态框
function showFocusStatsModal() {
    const modal = document.getElementById('focus-stats-modal');

    // 更新统计显示
    updateFocusStatsDisplay();
    updateHistoryStats();

    // 显示模态框
    modal.classList.add('active');
}

// 初始化专注统计事件监听器
function initFocusStatsEventListeners() {
    // 专注统计按钮
    if (focusStatsBtn) {
        focusStatsBtn.addEventListener('click', showFocusStatsModal);
    }

    // 关闭按钮
    if (closeFocusStatsBtn) {
        closeFocusStatsBtn.addEventListener('click', () => {
            const modal = document.getElementById('focus-stats-modal');
            modal.classList.remove('active');
        });
    }

    // 点击模态框背景关闭
    const modal = document.getElementById('focus-stats-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // 重置今日统计按钮
    if (resetTodayStatsBtn) {
        resetTodayStatsBtn.addEventListener('click', resetTodayStats);
    }

    // 导出统计按钮
    if (exportStatsBtn) {
        exportStatsBtn.addEventListener('click', exportStats);
    }

    // 关闭统计按钮
    if (closeStatsBtn) {
        closeStatsBtn.addEventListener('click', () => {
            const modal = document.getElementById('focus-stats-modal');
            modal.classList.remove('active');
        });
    }

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('focus-stats-modal');
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// 在initEventListeners函数中添加专注统计事件监听器
// 修改initEventListeners函数，添加以下代码：
// initFocusStatsEventListeners();



