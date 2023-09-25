<tfoot>
    <tr>
        <th style="--bg-color: var(--light-blue)">
            <div><span>X (YOU)</span><span>14</span></div>
        </th>
        <th style="--bg-color: var(--silver)">
            <div><span>TIES</span><span>32</span></div>
        </th>
        <th style="--bg-color: var(--light-yellow)">
            <div><span>O (CPU)</span><span>11</span></div>
        </th>
    </tr>
</tfoot>

<style>
    th {
        width: 140px;
        height: 72px;
        border-radius: 15px;
        background-color: var(--bg-color);

        & div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            & span {
                font-size: 14px;
                font-weight: 500;

                &:last-child {
                    font-size: 24px;
                    font-weight: 700;
                }
            }
        }
    }
</style>
